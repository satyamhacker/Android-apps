import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../Theme/colors';

interface Job {
  title: string;
  applicants: number;
  openings: number;
  experience: string;
  employmentType: string;
  salary: string;
  location: string;
  PostedDate: Date;
}

const JobScreen = () => {
  const jobs: Job[] = [
    {
      title: 'Test Engineer',
      applicants: 2,
      openings: 2,
      experience: '1-5 Years',
      employmentType: 'Permanent',
      salary: '₹20,000 - ₹40,000',
      location: 'Bangalore',
      PostedDate: new Date('2024-12-01'),
    },
    // Add more job objects here
  ];

  const handleCardClick = () => {
    Alert.alert('Card clicked');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {jobs.map((job, index) => (
        <TouchableOpacity key={index} onPress={handleCardClick} activeOpacity={0.8}>
          <View style={styles.card}>
            {/* Top Section */}
            <View style={styles.topSection}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.infoText}>Posted Date: {job.PostedDate.toLocaleDateString()}</Text>
              <View style={styles.row}>
                <View style={styles.infoItem}>
                  <Ionicons name="people-outline" size={20} style={[styles.icon, {color:colors.success}]} />
                  <Text style={[styles.infoText,{color:colors.success}]}>{job.applicants} Applicants</Text>
                </View>
                <View style={styles.infoItem}>
                  <Ionicons name="briefcase-outline" size={20} style={[styles.icon, {color:colors.success}]} />
                  <Text style={[styles.infoText, {color:colors.success}]}>{job.openings} Openings</Text>
                </View>
              </View>
            </View>

            {/* Bottom Section */}
            <View style={styles.bottomSection}>
              <View style={styles.row}>
                <View style={styles.infoItem}>
                  <Ionicons name="time-outline" size={20} style={styles.icon} />
                  <Text style={styles.infoText}>{job.experience}</Text>
                </View>
                <View style={styles.infoItem}>
                  <Ionicons name="calendar-outline" size={20} style={styles.icon} />
                  <Text style={styles.infoText}>{job.employmentType}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.infoItem}>
                  <Ionicons name="cash-outline" size={20} style={styles.icon} />
                  <Text style={styles.infoText}>{job.salary}</Text>
                </View>
                <View style={styles.infoItem}>
                  <Ionicons name="location-outline" size={20} style={styles.icon} />
                  <Text style={styles.infoText}>{job.location}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  topSection: {
    marginBottom: 16,
  },
  bottomSection: {
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Distribute items evenly
    marginRight: 8,
  },
  infoText: {
    marginLeft: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  icon: {
    width: 20,
    marginRight: 8,
  },
});

export default JobScreen;
