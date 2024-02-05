import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem/CartItem';
import { colors } from '../global/colors';
import { useSelector } from 'react-redux'; 
import { usePostOrdersMutation } from '../app/Services/shopService';

const Cart = ({ navigation }) => {
  const cart = useSelector(state => state.cart.value);
  const [triggerPostOrder] = usePostOrdersMutation();
  const [cartValid, setCartValid] = useState(false); 

  const handleConfirmPress = () => {
     triggerPostOrder(cart);
     navigation.navigate('OrderStack');

    // acá deberías limpiar carrito, mostrar mensaje de orden exitosa y navegar
  }

  useEffect(() => {
    setCartValid(cart.total > 0);
  }, [cart.total]);

  const confirmContainerStyle = {
    ...styles.confirmContainer,
    backgroundColor: cartValid ? colors.green : colors.mediumGray,
  };


  return (
    <View style={styles.mainView}>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.container}>
        <View style={styles.containerTotal}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.price}>${cart.total}</Text>
        </View>
        <Pressable style={confirmContainerStyle} onPress={handleConfirmPress}>
          <Text style={styles.confirmText}>Confirm</Text>
        </Pressable>
      </View>
    </View>
  );}


export default Cart;

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
});
