import { StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header/Header';
import Categories from '../components/Categories/Categories';
import ItemListCategories from './ItemListCategories';

const Home = ({setCategorySelected}) => {
  return (
    <>
        <Header title='Categories'/> 
        <Categories setCategorySelected={setCategorySelected}/>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})