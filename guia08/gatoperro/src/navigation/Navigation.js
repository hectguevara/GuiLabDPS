import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import GatosScreen from '../screens/GatosScreen';
import PerrosScreen from '../screens/PerrosScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Gatos') {
              iconName = 'paw';
            } else if (route.name === 'Perros') {
              iconName = 'bonfire';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Gatos" component={GatosScreen} />
        <Tab.Screen name="Perros" component={PerrosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
