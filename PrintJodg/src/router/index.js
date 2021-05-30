import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Profile, HomeUser, Promo, FormatPrint, TentangKami} from '../pages';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
Icon.loadFont()


const Tab = createBottomTabNavigator();
const Router = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen 
        name="Home" 
        component={HomeUser} 
        options={{
          tabBarIcon : ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          )
        }}
        
        />
        <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{tabBarIcon : ({size, color}) => (
          <Icon name="user" size={size} color={color} />
        )}}
        />
      </Tab.Navigator>
    )  
};

const Stack = createStackNavigator();
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="FormatPrint" component={FormatPrint} />
      <Stack.Screen name="Promo" component={Promo} />
      <Stack.Screen name="TentangKami" component={TentangKami} />
    </Stack.Navigator>
  </NavigationContainer>

export default Router;

