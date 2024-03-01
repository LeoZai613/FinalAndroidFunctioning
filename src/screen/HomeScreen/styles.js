import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8', // Set a neutral background color
    flex: 1,
    paddingHorizontal: 20, // Add horizontal padding for a more spacious layout
    justifyContent: 'center', // Center content vertically
  },
  // Updated button1 style without background color
  button1: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF', // Add a professional-looking background color
    borderRadius: 8, // Add border radius for rounded corners
  },
});

export default styles;
