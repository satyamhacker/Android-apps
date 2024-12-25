import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabNavigator from './MainTabNavigator';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import MainHeader from '../components/MainHeader';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        // eslint-disable-next-line react/no-unstable-nested-components
        header: () => <MainHeader title="AID-IPH" />,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={MainTabNavigator}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
