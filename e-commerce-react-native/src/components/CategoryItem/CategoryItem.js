import React from 'react'
import { Pressable, StyleSheet, Text  } from 'react-native'

const CategoryItem = ({item}) => {
  return (
    <Pressable style={styles.container}>
        <Text style={styles.text}>{item}</Text>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '80%',
        margin: 10,
        padding: 10,
        marginHorizontal: "10%",
        textAlign: 'center',
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


    },
    text: {

    },
})