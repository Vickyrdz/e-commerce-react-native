import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react';
import { colors } from '../../global/colors';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../features/Cart/CartSlice';




const mayus = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};



const CartItem = ({item}) => {
  const dispatch = useDispatch(); 

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: item.thumbnail }}
        />
      </View>
      <View style={styles.texts}>
        <Text style={styles.textTitle}>{mayus(item.title)}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.textQuantity}>Quantity: {item.quantity}</Text>
          <Text style={styles.text}>${item.price}</Text>
        </View>
      </View>
      <Pressable onPress={()=> dispatch(removeItem(item.id))}>
        <Ionicons name="close" size={24} color={colors.mediumGray} />
      </Pressable>
    </View>
  );
}

export default CartItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: "white",
    height: 100,
    alignItems: 'center',
    width: "95%",
    borderRadius: 20,
    alignSelf: "center"
  },
  imageContainer: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 15,
  },
  image: {
    width: 90,
    height: 80,
    borderRadius: 10
 },
 texts: {
  gap: 8,
  width: "60%",
  justifyContent: "center",
 },
 text: {
  fontFamily: 'PoppinSemiRegular',
  color: colors.strongGray,
  fontSize: 14,
  width: "40%",
  alignSelf: 'center'
},
  priceContainer:{
    flexDirection: 'row',
    gap: 10,
    textAlign: 'center',
    width: '50%',
    alignSelf: 'center'
},
 textQuantity: {
  fontFamily: 'PoppinSemiRegular',
  color: colors.strongGray,
  fontSize: 14,
  alignSelf: 'center'
},
textTitle:{
  fontFamily: 'PoppinSemiRegular',
  color: colors.strongGray,
  fontSize: 14,
  paddingLeft: 10,
  textAlign: 'center',
  width: '80%',
  alignSelf: 'center'
}
})