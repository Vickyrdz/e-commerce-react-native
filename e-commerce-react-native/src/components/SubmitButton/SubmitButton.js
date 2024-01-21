import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../global/colors';
import useSignUp from '../../Hooks/useSignUp';



const SubmitButton = ({title, onPress}) => {


  const {
    someFieldEmpty,
  } = useSignUp();  


  return (
    <Pressable style={ someFieldEmpty ? styles.buttonEmpty : styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default SubmitButton;


const styles = StyleSheet.create({
    button: {
        width: "20%",
        backgroundColor: colors.lilac,
        height: 30,
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    buttonEmpty: {
      width: "20%",
      backgroundColor: colors.mediumGray,
      height: 30,
      borderRadius: 5,
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: 20
    },
    text: {
        color: "white",
        fontFamily: "PoppinBold",
        fontSize: 15,
        textAlign: 'center'

    }
})