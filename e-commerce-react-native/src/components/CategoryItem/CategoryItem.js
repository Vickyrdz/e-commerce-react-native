import React from 'react'
import { Pressable, StyleSheet, Text  } from 'react-native';
import { colors } from '../../global/colors';
import { useDispatch } from 'react-redux'; 
import { setProductsFilteredByCategory } from '../../features/shop/ShopSlice'; 


const CategoryItem = ({item, navigation, route }) => {

  const dispatch = useDispatch(); 

  const mayus = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        dispatch(setProductsFilteredByCategory(item));
        navigation.navigate("Category", { item: item });
      }}
    >
      <Text style={styles.text}>{mayus(item)}</Text>
    </Pressable>
  );
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mediumBlue,
        width: '60%',
        margin: 10,
        padding: 10,
        textAlign: 'center',
        borderRadius: 15,
        // SOMBRA ANDROID,
        shadowRadius: 1,
        alignSelf: 'center'

    },
    text: {
      color: "white",
      fontFamily: 'PoppinSemiRegular',
      textAlign: 'center'
      
    },
})