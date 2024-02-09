import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import OrderDetailItem from '../components/OrderDetailItem/OrderDetailItem'

const OrderDetail = ({ navigation, route }) => {
  const { order } = route.params; 

  return (
    <FlatList
      data={order.items}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <OrderDetailItem item={item} navigation={navigation} route={route}/>}
    />
  )
}

export default OrderDetail

const styles = StyleSheet.create({})