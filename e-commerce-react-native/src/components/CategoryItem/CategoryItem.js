import React from 'react'
import { Pressable, StyleSheet, Text  } from 'react-native';
import { colors } from '../../global/colors'


const CategoryItem = ({item, setCategorySelected}) => {

  const mayus = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  
  return (
    <Pressable style={styles.container} onPress={()=> setCategorySelected(item)}>
        <Text style={styles.text}>{mayus(item)}</Text>
    </Pressable>
  )
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
        elevation: 10,
        // SOMBRA IOS
        shadowColor: 'black',
        shadowOffset: {
          width: 5,
          height: 3
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        alignSelf: 'center'

    },
    text: {
      color: "white",
      fontFamily: 'PoppinSemiRegular',
      textAlign: 'center'
      
    },
})