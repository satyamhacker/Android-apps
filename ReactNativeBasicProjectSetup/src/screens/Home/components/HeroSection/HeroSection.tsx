import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert,TouchableOpacity } from 'react-native';
import styles from './HeroSection.styles'; // Import your custom stylesheet
import twoBoy from '../../../../assets/HeroSectionImages/twoBoy.png'; // Import the image
import { ScrollView } from 'react-native-gesture-handler';

const App = () => {

  const handlePress = () => {
    Alert.alert('Button Pressed!');
  };

  return (
    <ScrollView>
    <Image source={twoBoy} style={styles.image} />
    
    <View style={styles.container}>
      <View>
      <Text style={styles.title}>Revolutionize Your HR with</Text>
      <Text style={styles.subtitle}> AI-Driven Solutions</Text>
      <Text style={styles.text}>Harness the power of Artifical intelligence
        to optimize your workforce,Streamline Hr processes, and make data-driven 
        decisions in real time..
      </Text>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Start Free Trial</Text>
      </TouchableOpacity>


      </View>
    </View>
    </ScrollView>
  );
};

export default App;
