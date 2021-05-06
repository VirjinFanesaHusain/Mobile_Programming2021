import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Profile, HomeUser} from '../pages';


const Tab = createBottomTabNavigator();

const Router = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen 
        name="Home" 
        component={HomeUser} 
        options={{headerShown: false}}
        />
        <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{headerShown: false}}
        />
      </Tab.Navigator>
      
    )
}

export default Router;

