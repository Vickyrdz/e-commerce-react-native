import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import OrderItem from "../components/OrderItem/OrderItem";
import { useGetOrdersQuery } from "../app/Services/shopService";

const Orders = ({navigation}) => {
  const [orders, setOrders] = useState([]);
  const { data, isLoading } = useGetOrdersQuery();

  useEffect(()=>{
    if(!isLoading) {
      const dataArray = Object.values(data);
      setOrders(dataArray);
    }
  }, [data])


  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <OrderItem order={item} navigation={navigation}/>}
    />
  );
};

export default Orders;

const styles = StyleSheet.create({});
