import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../global/colors';
import { useSelector, useDispatch } from 'react-redux'; 
import { addItem } from '../features/Cart/CartSlice';
import { usePostOrdersMutation } from '../app/Services/shopService';

const ItemDetail = ({ route }) => {
  const dispatch = useDispatch(); 
  const product = useSelector((state) => state.shop.value.productSelected);
  const { width, height } = useWindowDimensions();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [triggerPostOrder] = usePostOrdersMutation();

  const handlePress = async () => {
        dispatch(addItem(product));

    // try {
    //   const { isSuccess } = await triggerPostOrder(product);
  
    //   if (isSuccess) {
    //     setShowSuccessMessage(true);
    //     setTimeout(() => {
    //       setShowSuccessMessage(false);
    //     }, 2000);
  
    //     dispatch(addItem(product));
    //   } 
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };
  


  return ( 
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: product.thumbnail }} resizeMode='cover'/>
        </View>
        <View style={styles.textContainer}>
          <Text style={width > 400 ? styles.titleMax : styles.title}>{product.title}</Text>
          <Text style={width > 400 ? styles.descriptionMax : styles.description}>{product.description}</Text>
          <Text style={styles.price}>-${product.price}-</Text>
          <Pressable style={styles.button} onPress={handlePress}>
            <Text style={styles.buyNow}>Buy Now</Text>
          </Pressable>
          {showSuccessMessage && (
              <Text style={styles.addesSucc}>¡Your product was added successfully!</Text>
          )}
        </View> 
      </View>
    </View>
  );
}



export default ItemDetail

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        height: "100%",
        justifyContent: 'center'
    },  
    card: {
      width: "80%",
      backgroundColor: 'white',
      height: "80%",
      borderRadius: 20,
    },
    imageContainer:{
      width: "100%",
      height: "45%"
    },
    image: {
      width: "100%",
      height: 300,
      borderRadius: 15,

    },
    textContainer: {
      height: "55%",
      justifyContent: 'center'
    },
    title: {
      color: colors.strongGray,
      textAlign: 'center',
      fontFamily: 'PoppinSemiRegular',
      marginTop: 20,
      fontSize: 20,
      marginBottom: 15
   },
   titleMax: {
    color: colors.strongGray,
    textAlign: 'center',
    fontFamily: 'PoppinSemiRegular',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 15
 },
   description: {
      fontFamily: 'PoppinMedium',
      color: colors.strongGray,
      textAlign: 'center',
      marginBottom: 10.
   },
   descriptionMax: {
    fontFamily: 'PoppinMedium',
    color: colors.strongGray,
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16
 },
 price: {
  fontSize: 30,
  color: colors.lilac,
  fontFamily: "PoppinBold",
  alignSelf: 'center'
 },
 button: {
  borderWidth: 3, // Ancho del borde
  borderColor: colors.lilac,
  backgroundColor: colors.lilac,
  padding: 10, 
  width: 130,
  height: 60,
  borderRadius: 70,
  alignSelf: 'center',
  marginTop: 10
 },
 buyNow: {
  fontSize: 22,
  color: 'white',
  fontFamily: "PoppinBold",
  alignSelf: 'center'
 },
 addesSucc: {
  textAlign: "center",
  padding: 10,
  marginBottom: 10,
  fontSize: 15,
  fontFamily: 'PoppinBold',
  color: colors.green
 }

})