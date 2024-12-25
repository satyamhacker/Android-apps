import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',  // Horizontal layout
    alignItems: 'center',  // Center vertically
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 380,  // Adjust image width
    height: 320,  // Adjust image height
    resizeMode: 'contain',  // Ensure the image scales proportionally
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'rgb(51, 89, 141)',  // Set the color to RGB value
    marginLeft:20

  },
  subtitle: {
    fontSize: 22,
    marginLeft:90,
    marginTop: -32,  // Negative value to shift the title upward
    color: 'rgb(32, 144, 170)',  // Set the color to RGB value

  },
  text: {
    marginTop: 10,
    marginLeft:25,
  },
  button: {
    backgroundColor: 'rgb(32, 143, 169)', // Button color
    paddingVertical: 8, // Smaller height
    paddingHorizontal: 16, // Smaller width
    borderRadius: 25, // Keeps the button curved
    alignSelf: 'flex-start', // Aligns the button to the left within the container
    elevation: 3, // Adds shadow (for Android)
    marginTop:10,
    marginLeft:20,
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
