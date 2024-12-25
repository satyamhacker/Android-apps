import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const SettingsScreen: React.FC = () => {
  const handleApply = () => {
    Alert.alert('Application Submitted', 'Your application has been submitted successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text style={styles.description}>
        This is a dummy JobScreen where users can view job details and apply for jobs.
      </Text>
      <Button title="Apply Now" onPress={handleApply} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: '#666',
  },
});

export default SettingsScreen;
