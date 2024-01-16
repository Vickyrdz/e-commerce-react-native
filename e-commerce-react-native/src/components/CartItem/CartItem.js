import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import { colors } from '../../global/colors';
import { Ionicons } from '@expo/vector-icons';


const mayus = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const CartItem = ({item}) => {
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
        <Text style={styles.text}>Cantidad: {item.quantity}</Text>
        <Text style={styles.text}>${item.price}</Text>
      </View>
      <Ionicons name="close" size={24} color={colors.mediumGray} />
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
    borderRadius: 15
  },
  image: {
    width: 90,
    height: 80,
    borderRadius: 10
 },
 texts: {
  flexDirection: 'row',
  gap: 8,
  width: "64%",
  justifyContent: "center",
 },
 text: {
  fontFamily: 'PoppinSemiRegular',
  color: colors.strongGray,
  fontSize: 12,
  alignSelf: 'center'
},
textTitle:{
  fontFamily: 'PoppinSemiRegular',
  color: colors.strongGray,
  fontSize: 12,
  width: "80%"
}
})