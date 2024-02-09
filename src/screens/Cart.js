import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem/CartItem';
import { colors } from '../global/colors';
import { useSelector, useDispatch } from 'react-redux'; 
import { usePostOrdersMutation } from '../app/Services/shopService';
import { cleanCart } from '../features/Cart/CartSlice';

const Cart = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.value.localId);
  const cart = useSelector(state => state.cart.value);
  const dispatch = useDispatch();
  const [triggerPostOrder] = usePostOrdersMutation();
  const [cartValid, setCartValid] = useState(false); 
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const handleConfirmPress = () => {
    const postOrderResult = triggerPostOrder({ ...cart, userId: localId });
     if (postOrderResult) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        dispatch(cleanCart())
        navigation.navigate('OrderStack');
      }, 1000);
      } 

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
      { showSuccessMessage ? <Text style={styles.textConfirmSuc}>¡The order has been successfully added!</Text>   
          :  <Text style={styles.textConfirmSucNothing}> </Text> }
      
        <View style={styles.containerTotal}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.price}>${cart.total}</Text>
        </View>
        <Pressable 
            style={confirmContainerStyle} 
            onPress={handleConfirmPress}
            disabled={!cartValid} 
          >
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
    marginBottom: 55
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
  },
  textConfirmSuc: {
    position:'relative',
    color: colors.green,
    textAlign: 'center',
    fontFamily: 'PoppinBold'
  },
  textConfirmSucNothing: {
    position:'relative',
    color: colors.lightGray,
    textAlign: 'center',
    fontFamily: 'PoppinBold'
  }
});
