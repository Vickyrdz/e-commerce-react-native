import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../global/colors'
import useSignUp from '../../Hooks/useSignUp';

const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
  const { inputInvalidEmail, inputInvalidPassword } = useSignUp();

  return (
    <View>
      <Text style={styles.labels}>{label}</Text>
      <TextInput
        style={styles.inputs}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      { inputInvalidEmail && label === 'Email' ? (
        <Text style={{ color: 'red', fontSize: 12, marginTop: 5 }}>
          Email invalid
        </Text>
      ) : null}
      {label === 'Password'}
    </View>
  );
};


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
        fontFamily: 'PoppinSemiRegular',
        color: colors.strongGray
    }
})