import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoryItem from '../CategoryItem/CategoryItem';
import { useGetCategoriesQuery } from '../../app/Services/shopService';


const Categories = ({navigation, route}) => {

  const {data: categories} = useGetCategoriesQuery(); 

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={categories}
      keyExtractor={item => item}
      numColumns={3}
      renderItem={({item}) => <CategoryItem item={item} navigation={navigation} route={route}/>}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center'
  }


})