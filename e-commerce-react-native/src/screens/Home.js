import { StyleSheet, View } from 'react-native'
import React from 'react'
import Categories from '../components/Categories/Categories';

const Home = ({navigation, route}) => {
  return (
    <View style={styles.container}  >
        <Categories navigation={navigation} route={route}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignSelf: 'center',
    

  }
})