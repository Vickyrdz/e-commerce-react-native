import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Profile from '../screens/Profile';
import ImageSelector from '../screens/ImageSelector';


const Stack = createNativeStackNavigator();


const ProfileStack = () => {
    return (
        <Stack.Navigator
          initialRouteName="Profile"
          screenOptions={({ route }) => {
            header: () => {
              return (
                <Header
                  title='Profile'
                />
              );
            };
          }}
        >
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ImageSelector" component={ImageSelector} />
        </Stack.Navigator>
      )
}

export default ProfileStack

const styles = StyleSheet.create({})