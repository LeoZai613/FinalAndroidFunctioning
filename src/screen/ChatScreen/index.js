import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {initializeApp, getApps} from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';

// ... existing firebaseConfig remains the same

// Initialize Firebase only if there isn't an instance already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    const messagesQuery = query(
      collection(db, 'messages'),
      orderBy('timestamp', 'desc'),
    );
    const unsubscribe = onSnapshot(messagesQuery, querySnapshot => {
      const fetchedMessages = querySnapshot.docs.map(doc => {
        const data = doc.data();
        const timestamp = data.timestamp
          ? new Date(data.timestamp.seconds * 1000)
          : new Date();
        return {
          id: doc.id,
          text: data.text,
          username: data.username,
          timestamp,
          imageUrl: data.imageUrl,
        };
      });
      setMessages(fetchedMessages);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim() !== '') {
      try {
        await addDoc(collection(db, 'messages'), {
          text: newMessage.trim(),
          username: username || 'Anonymous',
          timestamp: serverTimestamp(),
        });
        setNewMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        setImage(source);
      }
    });
  };

  const uploadImage = async uri => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const storageRef = ref(storage, `images/${new Date().toISOString()}`);
    const snapshot = await uploadBytes(storageRef, blob);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  };

  const sendMessageWithImage = async () => {
    if (image && newMessage.trim() !== '') {
      const imageUrl = await uploadImage(image.uri);
      try {
        await addDoc(collection(db, 'messages'), {
          text: newMessage.trim(),
          username: username || 'Anonymous',
          timestamp: serverTimestamp(),
          imageUrl,
        });
        setNewMessage('');
        setImage(null);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.usernameInput}
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder="Enter your username"
      />
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={messages}
          renderItem={({item}) => (
            <View style={styles.messageContainer}>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.message}>{item.text}</Text>
              {item.imageUrl && (
                <Image source={{uri: item.imageUrl}} style={styles.image} />
              )}
              <Text style={styles.timestamp}>
                {item.timestamp.toLocaleString()}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          inverted
        />
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={text => setNewMessage(text)}
          placeholder="Type your message here..."
          onSubmitEditing={() => sendMessage()}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => sendMessage()}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={pickImage}>
          <Text style={styles.sendButtonText}>Pick Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessageWithImage}>
          <Text style={styles.sendButtonText}>Send Image</Text>
        </TouchableOpacity>
      </View>
      {image && (
        <View style={styles.previewContainer}>
          <Image source={{uri: image.uri}} style={styles.previewImage} />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={sendMessageWithImage}>
            <Text style={styles.sendButtonText}>Upload & Send</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  messageContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  username: {
    fontSize: 14,
    color: 'green',
    marginBottom: 5,
  },
  message: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  usernameInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 8,
  },
  previewContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  previewImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default ChatScreen;
