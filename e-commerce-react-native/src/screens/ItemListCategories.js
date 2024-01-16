import { StyleSheet, FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Search from '../components/Search/Search';
import ProductItem from '../components/ProductItem/ProductItem';
import { useGetProductsQuery } from '../app/Services/shopService';

const ItemListCategories = ({navigation, route}) => {
  const { item } = route.params;
  const { data, isLoading } = useGetProductsQuery(item); 
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState(data);

  useEffect(()=>{
    if(!isLoading) {
      const dataArray = Object.values(data);
      const productsFiltered = dataArray.filter(product => product.title.includes(keyword));
      setProducts(productsFiltered);
    }
  }, [keyword, data])

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