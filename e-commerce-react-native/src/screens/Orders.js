 import { FlatList, StyleSheet, Text, View } from 'react-native'
 import React from 'react';
 import allOrders from '../data/orders.json';
import OrderItem from '../components/OrderItem/OrderItem';
 
 const Orders = () => {
   return (
     <FlatList
        data={allOrders}
        keyExtractor={item => item.id}
        renderItem={({item})=> <OrderItem order={item}/>}
     />
   )
 }
 
 export default Orders
  
 const styles = StyleSheet.create({})