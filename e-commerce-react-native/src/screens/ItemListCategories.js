import { StyleSheet, FlatList, Pressable, Button} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import allProducts from '../data/products.json'; 
import ProductItem from '../components/ProductItem/ProductItem';

const ItemListCategories = ({navigation, route}) => {

  const {item: category} = route.params

  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState(allProducts)

  useEffect(()=>{
    console.log({ rp: route.params });
    if(category) {
      const productsCategory = allProducts.filter(product => product.category === category)
      const productsFiltered = productsCategory.filter(product => product.title.includes(keyword));
      setProducts(productsFiltered); 
    } else {
      const productsFiltered = allProducts.filter(product => product.title.includes(keyword));
      setProducts(productsFiltered); 
    }
   
  }, [keyword, category])

  const mayus = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  

  return (
    <>
      <Search setKeyword={setKeyword}/>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductItem item={item} navigation={navigation} route={route}/>}
      />
    </>
  );
}

export default ItemListCategories

const styles = StyleSheet.create({
    container: {
       width: "100%",
       marginTop: 20
    }
})