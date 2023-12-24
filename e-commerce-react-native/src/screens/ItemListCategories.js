import { StyleSheet, FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Search from '../components/Search/Search';
import ProductItem from '../components/ProductItem/ProductItem';
import { useSelector } from 'react-redux'; 

const ItemListCategories = ({navigation, route}) => {

  const productsFilteredByCategory = useSelector(state => state.shop.value.productsFilteredByCategory); 
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState(productsFilteredByCategory)

  useEffect(()=>{
    
      const productsFiltered = productsFilteredByCategory.filter(product => product.title.includes(keyword));
      setProducts(productsFiltered); 
    
  }, [keyword, productsFilteredByCategory])

  const mayus = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  

  return (
    <View style={styles.mainView}>
      <Search setKeyword={setKeyword}/>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductItem item={item} navigation={navigation} route={route}/>}
      />
    </View>
  );
}

export default ItemListCategories

const styles = StyleSheet.create({
  mainView: {
    height: "100%",
    paddingBottom: 60,
  },
  container: {
      width: "100%",
      marginTop: 20
  }
})