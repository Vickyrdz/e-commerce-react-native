import { StyleSheet, FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import allProducts from '../data/products.json'; 
import ProductItem from '../components/ProductItem/ProductItem';

const ItemListCategories = ({category}) => {

  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState(allProducts)

  useEffect(()=>{
    if(category) {
      const productsCategory = allProducts.filter(product => product.category === category)
      const productsFiltered = productsCategory.filter(product => product.title.includes(keyword));
      setProducts(productsFiltered); 
    } else {
      const productsFiltered = allProducts.filter(product => product.title.includes(keyword));
      setProducts(productsFiltered); 
    }
   
  }, [keyword])

  const mayus = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  

  return (
    <>
      <Header title={mayus(category) || 'Products'}/>
      <Search setKeyword={setKeyword}/>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductItem item={item}/>}
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