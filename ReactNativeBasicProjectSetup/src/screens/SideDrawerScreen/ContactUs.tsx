import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import colors from '../../Theme/colors';

// Define the type for state values
interface ContactUsState {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactUsState>({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes and update the formData state
  const handleInputChange = (field: keyof ContactUsState, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    const { name, email, message } = formData;
    
    // Check if all fields are filled
    if (!name || !email || !message) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }
    // Check if the email contains '@'
    if (!email.includes('@')) {
        Alert.alert('Error', 'Please enter a valid email address!');
        return;
    }
    
    // Show alert with all form data
    Alert.alert('Contact Us Data', `Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <View style={styles.container}>
      {/* Name Input */}
      <Text>ContactUs Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange('name', value)}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />

      {/* Message Input */}
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Your Message"
        multiline
        numberOfLines={4}
        value={formData.message}
        onChangeText={(value) => handleInputChange('message', value)}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.textSecondary,
    borderRadius: 5,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top', // Aligns text at the top of the TextInput
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'flex-end', // Align the button to the right
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ContactUs;
