
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import colors from '../Theme/colors';



interface MainHeaderProps {
  title: string;
  showBackButton?: boolean;
}


const MainHeader: React.FC<MainHeaderProps> = ({ title ,showBackButton = false}) => {
  const navigation = useNavigation<DrawerNavigationProp<any>>(); 

  return (
    <View style={styles.headerContainer}>
    {/* Back Button or Drawer Toggle Button */}
    {showBackButton ? (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color={colors.primaryBackground} />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <MaterialIcons name="menu" size={24} color={colors.primaryBackground} />
      </TouchableOpacity>
    )}

    {/* App Logo and Title */}
    <View style={styles.titleContainer}>
      <Image
        source={require('../assets/logo.png')} 
        style={styles.logo}
      />
      <Text style={[styles.title, {color: colors.primaryBackground}]}>{title}</Text>
    </View>

    {/* Notification Icon */}
    <TouchableOpacity 
    onPress={() => alert('Notifications clicked!')}>
      <MaterialIcons name="notifications" size={24} color={colors.primaryBackground} />
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: colors.primaryDark, 
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MainHeader;
