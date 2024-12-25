import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import colors from '../Theme/colors';
import ChangePassword from '../screens/SideDrawerScreen/ChangePassword'
import ContactUs from '../screens/SideDrawerScreen/ContactUs';


import { useNavigation,NavigationProp  } from '@react-navigation/native';

export type RootStackParamList = {
  ChangePassword: undefined; // No parameters expected
  ContactUs: undefined; // Example for another route
};

// Define the types for props
interface DrawerContentProps {
  // You can define any necessary props here if you pass props from DrawerNavigator

}

const DrawerContent: React.FC<DrawerContentProps> = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


//   const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(true); 
  const [profileImage] = useState<any>(require('../assets/profileavatar.jpg')); 
//   const navigation = useNavigation();

  // const handleProfileImageUpload = () => {
  //   // Implement profile image upload logic here
  //   Alert.alert('Upload Image', 'You can upload a new profile image.');
  // };

  const handleLogout = () => {
    // Handle logout logic
    Alert.alert('Logged Out', 'You have successfully logged out.');
  };

  const handleChangePassword = () => {
    // Handle change password logic
    Alert.alert('Change Password', 'Navigate to the change password screen.');
    navigation.navigate('ChangePassword');
  };

  const handleContactUs = () => {
    // Handle contact us
    Alert.alert('Contact Us', 'Navigate to the contact us screen.');
    navigation.navigate('ContactUs');
  };

  return (

      <View style={styles.drawerContainer}>
        {/* Profile Section */}
        <ImageBackground
          source={require('../assets/logo.png')} // Set your logo image as background
          style={styles.profileSection}
          imageStyle={{ resizeMode: 'contain' ,opacity: 0.2 }} 
        >
          <Image source={profileImage} style={styles.profileImage} />
          {/* <TouchableOpacity onPress={handleProfileImageUpload}>
            <Text style={styles.uploadText}>Change Profile Image</Text>
          </TouchableOpacity> */}
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userRole}>Admin</Text>
          <Text style={styles.userEmail}>johndoe@example.com</Text>
        {/* </View> */}
        </ImageBackground>

        {/* Drawer Items */}
        <View style={styles.drawerItems}>
          <TouchableOpacity onPress={handleChangePassword}>
            <Text style={styles.drawerItem}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.drawerItem}>Logout</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleContactUs}>
            <Text style={styles.footerText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 0,
  },
  profileSection: {
    backgroundColor: colors.primaryDark,
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    marginTop:20,
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  uploadText: {
    color: colors.primaryBackground,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primaryBackground,
  },
  userRole: {
    fontSize: 14,
    color: colors.primaryBackground,
  },
  userEmail: {
    fontSize: 14,
    color:colors.primaryBackground,
    marginBottom: 15,
  },
  drawerItems: {
    flex: 1,
    paddingHorizontal: 20,
  },
  drawerItem: {
    fontSize: 16,
    paddingVertical: 10,
    color: colors.textMuted,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor:colors.surface,
  },
  footerText: {
    fontSize: 16,
    color: colors.primary,
  },
});

export default DrawerContent;
