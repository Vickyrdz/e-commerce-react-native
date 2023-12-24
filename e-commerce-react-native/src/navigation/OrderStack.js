import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Orders from '../screens/Orders';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 


const Stack = createNativeStackNavigator();


const OrderStack = () => {
    return (
        <Stack.Navigator
          initialRouteName="Orders"
          screenOptions={({ route }) => {
            header: () => {
              return (
                <Header
                  title='Orders'
                />
              );
            };
          }}
        >
          <Stack.Screen name="Orders" component={Orders} />
        </Stack.Navigator>
      )
}

export default OrderStack

const styles = StyleSheet.create({})