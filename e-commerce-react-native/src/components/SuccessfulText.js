import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const SuccessfulText = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/check-removebg-preview.png')}/>
      <Text style={styles.text}>¡Account Created successfully!</Text>
    </View>
  )
}

export default SuccessfulText

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgreen,
    height: 350,
    width: "80%",
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingBottom: 20 
  },
  image: {
    height: 100,
    width: 100
  },
  text: {
    fontFamily: 'PoppinSemiRegular',
    color: colors.green,
    fontSize: 18
  }
})