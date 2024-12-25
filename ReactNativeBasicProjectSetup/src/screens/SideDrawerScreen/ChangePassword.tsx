import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import colors from '../../Theme/colors';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [oldPasswordVisible, setOldPasswordVisible] = useState(false); // State for toggling old password visibility
  const [newPasswordVisible, setNewPasswordVisible] = useState(false); // State for toggling new password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State for toggling confirm password visibility

  // Function to handle Save Changes button click
  const handleSaveChanges = () => {
    // Check if all fields are filled and if new password matches confirm password
    if (!oldPassword || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New password and confirm password do not match!');
      return;
    }

    // If everything is valid, show the alert with entered data
    Alert.alert(
      'Password Changed',
      `Old Password: ${oldPassword}\nNew Password: ${newPassword}\nConfirm New Password: ${confirmPassword}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Change Password</Text>

      {/* Old Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Old Password"
          secureTextEntry={!oldPasswordVisible} // Toggle visibility based on state
          value={oldPassword}
          onChangeText={setOldPassword}
        />
        <TouchableOpacity onPress={() => setOldPasswordVisible(!oldPasswordVisible)}>
          <Ionicons
            name={oldPasswordVisible ? 'eye-off' : 'eye'}
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* New Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry={!newPasswordVisible} // Toggle visibility based on state
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TouchableOpacity onPress={() => setNewPasswordVisible(!newPasswordVisible)}>
          <Ionicons
            name={newPasswordVisible ? 'eye-off' : 'eye'}
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Confirm New Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          secureTextEntry={!confirmPasswordVisible} // Toggle visibility based on state
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
          <Ionicons
            name={confirmPasswordVisible ? 'eye-off' : 'eye'}
            size={24}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Save Changes Button */}
      <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Update Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    padding: 20,
    backgroundColor: colors.background,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row', // Align input and icon horizontally
    alignItems: 'center', // Center the icon vertically with the input
    width: '100%',
    marginBottom: 15,
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.textMuted,
    borderRadius: 5,
    backgroundColor: colors.background,
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  button: {
    width: '50%',
    padding: 15,
    backgroundColor: colors.black,
    borderRadius: 5,
    alignItems: 'center',
    bottom: 20,
    right: 0,
    marginTop: 20,
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
  },
});

export default ChangePassword;
