import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../../global/colors'

const ProductItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image}
          resizeMode='cover'
          source={{ uri: item.thumbnail}}/>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
     container: {
        width: '80%',
        backgroundColor: 'white',
        marginHorizontal: '10%',
        marginVertical: 10,
        borderRadius: 10,
        // SOMBRA ANDROID,
        elevation: 10,
        // SOMBRA IOS
        shadowColor: 'black',
        shadowOffset: {
          width: 5,
          height: 3
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        flexDirection: 'column'
     },
     imageContainer:{
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
       
     },
     image: {
        width: 200,
        height: 190,
        borderRadius: 15
     },
     title: {
        color: colors.strongGray,
        textAlign: 'center',
        fontFamily: 'PoppinSemiRegular'
     },
     description: {
        fontFamily: 'PoppinMedium',
        color: colors.strongGray,
        textAlign: 'center',

     }
})