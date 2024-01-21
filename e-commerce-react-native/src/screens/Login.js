import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import InputForm from '../components/InputForm/InputForm'
import SubmitButton from '../components/SubmitButton/SubmitButton';
import { colors } from '../global/colors';
import { useLoginMutation } from '../app/Services/auth';
import { useDispatch } from 'react-redux'; 
import { setUser } from '../features/Auth/AuthSlice';
import { signUpSchema } from '../Validations/SignUpSchema';
import useLogin from '../Hooks/useLogin';


const Login = ({navigation}) => {

    const dispatach = useDispatch();
    const [triggerLogin, { data, isSuccess }] = useLoginMutation();

    const {
      userLogin,
      rulesPassword,
      setUserLogin,
      inputInvalidEmail,
      allowEmailErrorMessage,
      focusedEmailInput,
      inputInvalidPassword,
      allowPasswordErrorMessage,
      focusedPasswordInput,
    } = useLogin();

    useEffect(()=>{
      if(isSuccess) dispatach(setUser(data))
  }, [isSuccess]);

    const email = userLogin.email; 
    const password = userLogin.password;

    const onSubmit = () => {
      triggerLogin({email, password});
    }


  return (
    <View style={styles.allContainer}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Log in to</Text>  
            <Text style={styles.title2}>your account</Text>
        </View>
        <View>
          <Text style={styles.text}>Email</Text>
          <TextInput
              value={userLogin.email}
              label="Email"
              name='email'
              onChangeText={(text) => setUserLogin({ ...userLogin, email: text })}
              style={styles.input}
              onFocus={allowEmailErrorMessage}
            />
            {inputInvalidEmail && focusedEmailInput ? (
              <Text style={styles.error}>Email invalid</Text>
            ) : (
              <Text style={styles.ghostText}>{" "}</Text>
            )}
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <TextInput
              label="Password"
              name='password'
              value={userLogin.password}
              onChangeText={(text) => setUserLogin({ ...userLogin, password: text })}
              style={styles.input}
              onFocus={allowPasswordErrorMessage}

            />
              {
                (inputInvalidPassword && focusedPasswordInput) ? (
                    <Text style={styles.error}>Password invalid</Text>
                  ) : (
                    <Text style={styles.ghostText}>{" "}</Text>
                  )
              }
        </View>
        
        <View style={styles.button}>
            <SubmitButton title="Send" onPress={onSubmit}/>
        </View>
        <View>
          <Text style={styles.notHaveText}>Not have an account?</Text>
          <Pressable  onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
    allContainer:{
        height:"100%",
        placecontent: "center",
        justifyContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        alignitems: "center",
        width: "80%",
        alignSelf: "center",
        textAlignLast: "center",
        height: "50%",
        justifyContent: "center",
        height:"80%",
        placecontent: "center",
        borderRadius: 10
    },
    titleContainer: {
        flexDirection: "row",
        gap: 5,
        alignSelf: "center",
    },
    title: {
        fontFamily: 'PoppinBold',
        color: colors.strongGray,
        fontSize: 20
    },
    title2:{
        fontFamily: 'PoppinBold',
        marginBottom: 30,
        color: colors.lilac,
        fontSize: 20
    },
    notHaveText: {
        fontFamily: 'PoppinSemiRegular',
        color: colors.strongGray,
        fontSize: 12,
        marginTop: 10,
        textAlign: 'center'
    },
    signUpText: {
        fontFamily: 'PoppinSemiRegular',
        color: colors.lilac,
        fontSize: 14,
        textAlign: 'center'

    },
    button: {
        marginBottom: 10
    },
    input: {
      width: "70%",
      alignSelf: "center",
      backgroundColor: colors.lightGray,
      borderRadius: 5,
      marginTop: 5,
      height: 22,
      marginBottom: 20
  },
  text: {
      fontFamily: 'PoppinSemiRegular',
      color: colors.strongGray,
      fontSize: 12,
      width: "70%",
      alignSelf: "center",
  },
  error: {
      color: colors.error,
      position: 'relative',
      bottom: 10,
      width: "70%",
      alignSelf: "center",
      fontFamily: 'PoppinSemiRegular',
      fontSize: 12
  },
  rules: {
      color: colors.strongGray,
      position: 'relative',
      bottom: 10,
      fontSize: 12,
      width: "90%",
      alignSelf: "center",
      fontFamily: 'PoppinSemiRegular',
      fontStyle: 'italic'
  },
  ghostText: {
    height: 0
  }
})
  
