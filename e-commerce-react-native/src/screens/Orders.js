import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import OrderItem from "../components/OrderItem/OrderItem";
import { useGetOrdersQuery } from "../app/Services/shopService";
import { colors } from "../global/colors";
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Orders = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.value.localId);
  const [orders, setOrders] = useState([]);
  const { data, isLoading, refetch} = useGetOrdersQuery(localId);

  useFocusEffect(
    React.useCallback(() => {
      refetch(localId);
    }, [localId])
  );
  useEffect(() => {
    if (!isLoading && data) {
      const ordersData = Object.entries(data);
      const dataArray = ordersData.map(([orderKey, order]) => {
        return { ...order, id: orderKey };
      });
      setOrders(dataArray);
    }
  }, [data, isLoading]);

  return (
    <View>
      {orders.length === 0 ? (
        <Text style={styles.notYet}>No orders yet.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <OrderItem order={item} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  notYet: {
    textAlign: "center",
    marginTop: "80%",
    fontSize: 16,
    fontFamily: "PoppinSemiRegular",
    color: colors.strongGray,
  },
});
