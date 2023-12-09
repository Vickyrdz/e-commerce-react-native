import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({ title = "Valor por defecto" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        height: 70,
        justifyContent: "center",
        alignItems: 'center'
    },
    text: {
        color: 'black'
    }
})