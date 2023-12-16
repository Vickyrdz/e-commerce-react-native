import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header';
import allProducts from '../data/products.json';

const ItemDetail = ({productDetailId, setProductDetailId}) => {

  const [product, setProduct] = useState({});

  useEffect(()=>{
    const productFinded = allProducts.find(product => product.id === productDetailId);
    setProduct(productFinded);
  }, [productDetailId]);

  return (
    <View style={styles.container}>
      <Header/>
      <Pressable onPress={()=> setProductDetailId(0)}>
        <Text>volver</Text>
      </Pressable>
      <Image style={styles.image} source={{uri: product.thumbnail}} resizeMode='cover'/>
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>${product.price}</Text>
      <Pressable>
        <Text>Buy Now</Text>
      </Pressable>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center'
    },  
    image: {
      width: "100%",
      height: 300
    },
})