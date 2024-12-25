import React from 'react';
import { View,StyleSheet } from 'react-native';
import HeroSection from './components/HeroSection/HeroSection';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <HeroSection/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2', 
  },
  // header: {
  //   paddingTop: 50,
  //   paddingBottom: 20,
  //   backgroundColor: '#3498db',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // logo: {
  //   width: 100,
  //   height: 100,
  //   resizeMode: 'contain',
  //   marginBottom: 10,
  // },
  // title: {
  //   fontSize: 32,
  //   fontWeight: 'bold',
  //   color: 'white',
  // },
  // subtitle: {
  //   fontSize: 16,
  //   color: 'white',
  // },
  // mainContent: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   paddingHorizontal: 20,
  // },
  // welcomeText: {
  //   fontSize: 24,
  //   marginBottom: 30,
  //   textAlign: 'center',
  //   color: '#333',
  // },
  // button: {
  //   backgroundColor: '#3498db',
  //   paddingVertical: 15,
  //   paddingHorizontal: 50,
  //   borderRadius: 5,
  //   marginVertical: 10,
  //   alignItems: 'center',
  // },
  // buttonText: {
  //   fontSize: 18,
  //   color: 'white',
  //   fontWeight: '600',
  // },
  // footer: {
  //   backgroundColor: '#333',
  //   padding: 10,
  //   alignItems: 'center',
  // },
  // footerText: {
  //   fontSize: 12,
  //   color: 'white',
  // },
});

export default HomeScreen;
