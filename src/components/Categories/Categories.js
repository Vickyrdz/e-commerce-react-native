import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CategoryItem from '../CategoryItem/CategoryItem';
import { useGetCategoriesQuery } from '../../app/Services/shopService';

const Categories = ({navigation, route}) => {

  const {data: categories} = useGetCategoriesQuery(); 

  return (
    <View style={styles.containerFather}>
      <FlatList
        contentContainerStyle={styles.container}
        data={categories}
        keyExtractor={item => item}
        numColumns={3}
        renderItem={({item}) => <CategoryItem item={item} navigation={navigation} route={route}/>}
      />
    </View>
   
  )
}

export default Categories

const styles = StyleSheet.create({
  containerFather: {
    flex: 1,
    height: "100%"
  },
  container: {
    width: '100%',
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: 100
  }


})