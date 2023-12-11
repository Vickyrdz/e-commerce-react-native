import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoryItem from '../CategoryItem/CategoryItem';
import categories from '../../data/categories.json';

const Categories = ({setCategorySelected}) => {
  return (
    <FlatList
      style={styles.container}
      data={categories}
      keyExtractor={item => item}
      renderItem={({item}) => <CategoryItem setCategorySelected={setCategorySelected} item={item}/>}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 30
  }
})