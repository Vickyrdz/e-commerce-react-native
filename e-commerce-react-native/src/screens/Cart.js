import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import allCart from '../data/cart.json';
import CartItem from '../components/CartItem/CartItem';
import { colors } from '../global/colors';

const Cart = () => {

  const [cart, setCart] = useState([]); 
  const [total, setTotal] = useState(0); 



  useEffect(()=> {
    setCart(allCart)
  }, []);

  useEffect(()=> {
    const total = cart.reduce((acc, product)=> acc + (product.price * product.quantity), 0); 
    setTotal(total);
    setCart(allCart)
  }, [cart]);

  return (
    <View style={styles.mainView}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.container}>
        <View style={styles.containerTotal}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.price}>${total}</Text>
        </View>
        <Pressable style={styles.confirmContainer}>
          <Text style={styles.confirmText}>Confirm</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Cart

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
  },
  container: {
    gap: 10,
    height: 155,
    width: "100%",
    marginTop: 20,
    marginBottom: 20
  },
  containerTotal: {
    height: 50,
    backgroundColor: "white",
    width: "95%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    alignSelf: "center",
    borderRadius: 20,
    marginTop:5
  },
  total:{
    marginLeft: 20,
    fontFamily: 'PoppinSemiRegular',
    color: colors.strongGray,
  },
  price: {
    marginRight: 20,
    fontFamily: 'PoppinSemiRegular',
    color: colors.strongGray,
  },
  confirmContainer: {
    height: 50,
    backgroundColor: colors.green,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 20
  },
  confirmText: {
    color: "white",
    fontFamily: "PoppinBold",
  }
})