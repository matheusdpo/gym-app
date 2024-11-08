// HomeScreen.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#175287', // Cor para o ícone/label ativo
      tabBarInactiveTintColor: '#fff', // Cor para o ícone/label inativo
      tabBarStyle: {
        backgroundColor: '#000',
        borderTopWidth: 0, // Remove a borda superior
        elevation: 0,      // Remove a sombra se estiver usando Android
        shadowOpacity: 0,  // Remove a sombra se estiver usando iOS
      },
    }}
    >
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarLabel: 'Workouts',
          tabBarIcon: ({ color, size }) => (
            <Icon name="dumbbell" color={color} size={size} />
          ),
          headerShown: false,
        }}
        
      />
      <Tab.Screen
        name="Tab3"
        component={Tab3}
        options={{
          tabBarLabel: 'Your Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
