import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import ContactStack from "./ContactStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} options={{title: 'Home'}} />
            <Tab.Screen name="About" component={AboutStack} options={{title: 'About'}} />
            <Tab.Screen name="Contact" component={ContactStack} options={{title: 'Contact'}} />
        </Tab.Navigator>
    );
}