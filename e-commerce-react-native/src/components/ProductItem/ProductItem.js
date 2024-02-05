import { StyleSheet, Text, View, Image, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../global/colors';
import { useDispatch } from 'react-redux';
import { setProductSelected } from '../../features/shop/ShopSlice'; 


const ProductItem = ({item, navigation, route}) => {

  const mayus = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const dispatch = useDispatch(); 
  const { width } = useWindowDimensions();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        dispatch(setProductSelected(item.id))
        navigation.navigate("Detail", { id: item.id });
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: item.thumbnail }}
        />
      </View>
      <Text style={width > 400 ? styles.titleMax : styles.title}>
        {mayus(item.title)}
      </Text>
      <Text style={width > 400 ? styles.descriptionMax : styles.description}>
        {mayus(item.description)}
      </Text>
    </Pressable>
  );
}

export default ProductItem

const styles = StyleSheet.create({
     container: {
        width: '80%',
        backgroundColor: 'white',
        marginHorizontal: '10%',
        marginVertical: 10,
        borderRadius: 10,
        // SOMBRA ANDROID,
        elevation: 10,
        // SOMBRA IOS
        shadowColor: 'black',
        shadowOffset: {
          width: 5,
          height: 3
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        flexDirection: 'column'
     },
     imageContainer:{
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
       
     },
     image: {
        width: 200,
        height: 190,
        minHeight: 100,
        minWidth: 100,
        borderRadius: 15
     },
     title: {
        color: colors.strongGray,
        textAlign: 'center',
        fontFamily: 'PoppinSemiRegular'
     },
     titleMax: {
      color: colors.lilac,
      textAlign: 'center',
      fontFamily: 'PoppinSemiRegular',
      fontSize: 16
   },
     description: {
        fontFamily: 'PoppinMedium',
        color: colors.strongGray,
        textAlign: 'center',
        marginBottom: 20.
     },
     descriptionMax: {
      fontFamily: 'PoppinMedium',
      color: colors.strongGray,
      textAlign: 'center',
      marginBottom: 20,
      fontSize: 16
   }
})