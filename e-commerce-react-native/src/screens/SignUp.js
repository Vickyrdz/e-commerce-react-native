import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import InputForm from '../components/InputForm/InputForm';
import SubmitButton from '../components/SubmitButton/SubmitButton';
import { colors } from '../global/colors';
import { useSignUpMutation } from '../app/Services/auth'; 
import { useDispatch } from 'react-redux';
import { setUser } from '../features/Auth/AuthSlice';
import { signUpSchema } from '../Validations/SignUpSchema';

const SignUp = ({navigation}) => {

    const dispatach = useDispatch();
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const [emailError, setEmailError] = useState(''); 
    const [passwordError, setPasswordError] = useState(''); 
    const [passwordConfirmlError, setPasswordConfirmError] = useState(''); 

    const [triggerSignUp, {data, isError, isSuccess, error, isLoading}] = useSignUpMutation()

    useEffect(()=>{
        if(isSuccess) dispatach(setUser(data))
    }, [isSuccess])

    const onSubmit = () => {
        try {
            setEmailError('');
            setPasswordError('');
            setPasswordConfirmError('');
            signUpSchema.validateSync({email, password, confirmPassword});
            triggerSignUp({email, password});
        } catch (error) {
            switch(error.path) {
                case "email": 
                    setEmailError(error.message)
                    break;
                case "password": 
                    setPasswordError(error.message)
                    break;
                case "confirmPassword":
                    setPasswordConfirmError(error.message)
                    break;
                default:
                    break;
            }
        }
    }

  return (
     <View style={styles.allContainer}>
        <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Create an</Text>  
            <Text style={styles.title2}>account</Text>
        </View>
        <InputForm
            label= 'Email'
            value= {email}
            onChangeText={(t)=>setEmail(t)}
            error={emailError}
        /> 
        <InputForm
            label= 'Password'
            value= {password}
            onChangeText={(t)=>setPassword(t)}
            error={passwordError}
        />
        <InputForm
            label= 'Confirm Password'
            value= {confirmPassword}
            onChangeText={(t)=>setConfirmPassword(t)}
            error={passwordConfirmlError}
        />
        <SubmitButton
            title='Send'
            onPress={onSubmit}
        />
        <View>
            <Text style={styles.alreadyText}>
                Already have an account? 
            </Text>
            <Pressable onPress={()=> navigation.navigate('Login')}>
                <Text style={styles.loginText}>Login</Text>
            </Pressable>
        </View>
        </View>
    </View>
  )
}

export default SignUp


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
    alreadyText: {
        fontFamily: 'PoppinSemiRegular',
        color: colors.strongGray,
        fontSize: 12
    },
    loginText: {
        fontFamily: 'PoppinSemiRegular',
        color: colors.lilac,
        fontSize: 14
    }
  
})