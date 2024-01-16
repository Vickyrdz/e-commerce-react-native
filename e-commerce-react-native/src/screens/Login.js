import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import InputForm from '../components/InputForm/InputForm'
import SubmitButton from '../components/SubmitButton/SubmitButton';
import { colors } from '../global/colors';
import { useLoginMutation } from '../app/Services/auth';
import { useDispatch } from 'react-redux'; 
import { setUser } from '../features/Auth/AuthSlice';
import { signUpSchema } from '../Validations/SignUpSchema';


const Login = ({navigation}) => {

    const dispatach = useDispatch();
    const [email, setEmail] = useState('jdimo@gmail.com');
    const [password, setPassword] = useState('123123');
    const [triggerLogin, {data, isError, isSuccess, error, isLoading}] = useLoginMutation()

    useEffect(()=>{
      if(isSuccess) dispatach(setUser(data))
  }, [isSuccess]);


  const onSubmit = () => {
    try {
        // signUpSchema.validateSync({email, password})
        console.log({ email, password });
        triggerLogin({ email, password })
    } catch (error) {
        
    }
}


  return (
    <View style={styles.allContainer}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Log in to</Text>  
            <Text style={styles.title2}>your account</Text>
        </View>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error=""
        />
        <InputForm
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error=""
        />
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
        fontWeight: 600,
        fontSize: 20
    },
    title2:{
        fontFamily: 'PoppinBold',
        marginBottom: 30,
        color: colors.lilac,
        fontWeight: 600,
        fontSize: 20
    },
    notHaveText: {
        fontFamily: 'PoppinSemiRegular',
        color: colors.strongGray,
        fontSize: 12,
        marginTop: 10
    },
    signUpText: {
        fontFamily: 'PoppinSemiRegular',
        color: colors.lilac,
        fontSize: 14
    },
    button: {
        marginBottom: 10
    }
})
  
