import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../global/colors'

const InputForm = ({label, value, onChangeText, isSecure, error}) => {
  return (
    <View>
      <Text style={styles.labels}>{label}</Text>
      <TextInput
        style={styles.inputs}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      { error ? <View><Text>{error}</Text></View> : null }

    </View>
  )
}

export default InputForm


const styles = StyleSheet.create({
    inputs: {
        width: "50%",
        alignSelf: "center",
        backgroundColor: colors.lightGray,
        borderRadius: 5,
        marginTop: 5,
        height: 22,
        marginBottom: 20
    },
    labels: {
        width: "50%",
        alignSelf: "center",
        textAlignLast: "start",
        fontFamily: 'PoppinSemiRegular',
        color: colors.strongGray
    }
})