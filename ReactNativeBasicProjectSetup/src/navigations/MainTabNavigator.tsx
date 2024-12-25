
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import JobScreen from '../screens/Job/JobScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../Theme/colors';
// import colors from '../theme/colors';


const Tab = createBottomTabNavigator();

const CustomTabBarIcon = (iconName: string, color: string, size: number) => {
  return <MaterialIcons name={iconName} color={color} size={size} />;
};

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary, // Use theme colors
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        headerShown: false,
        headerStyle: styles.headerStyle,
        headerTintColor:  colors.background,
        headerTitleAlign: 'center',
        tabBarIcon: ({ color, size }) => {
          let iconName = '';
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Job') iconName = 'work';
          else if (route.name === 'Profile') iconName = 'person';
          else if (route.name === 'Settings') iconName = 'settings';
          return CustomTabBarIcon(iconName, color, size);
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarBadge: 3,
          tabBarAccessibilityLabel: 'Home Tab',
        }}
      />
      <Tab.Screen
        name="Job"
        component={JobScreen}
        options={{
          tabBarLabel: 'Jobs',
          tabBarBadge: 5,
          tabBarBadgeStyle: styles.badgeStyle,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.primaryBackground, // Light Gray Background
    borderTopWidth: 1,
    borderTopColor: colors.border, 
    height: 60,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '600',
  },
  headerStyle: {
    backgroundColor: colors.primary, // Green Header Background
  },
  badgeStyle: {
    backgroundColor: colors.warning, // Orange Badge Background
    color: colors.background, // White Badge Text
    fontSize: 10,
  },
});

export default MainTabNavigator;
