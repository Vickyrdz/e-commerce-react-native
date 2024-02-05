import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import { colors } from "../global/colors";
import { useSignUpMutation } from "../app/Services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/Auth/AuthSlice";
import { signUpSchema } from "../Validations/SignUpSchema";
import useSignUp from "../Hooks/useSignUp";
import SuccesfulText from '../components/SuccessfulText'
import { insertSession } from "../DB";

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const [triggerSignUp, { data, isError, isSuccess, error, isLoading }] = useSignUpMutation();

  const {
    userSignUp,
    rulesPassword,
    setUserSignUp,
    someFieldEmpty,
    inputInvalidEmail,
    allowEmailErrorMessage,
    focusedEmailInput,
    inputInvalidPassword,
    allowPasswordErrorMessage,
    focusedPasswordInput,
    allowConfirmPasswordErrorMessage,
    focusedConfirmPasswordInput,
    inputInvalidConfirmPassword,
  } = useSignUp();


  useEffect(() => {
    if (isSuccess) {
      setShowSuccessMessage(true);
      
      setTimeout(() => {
          setShowSuccessMessage(false);
          dispatch(setUser(data));
          insertSession(data)
      }, 2000);
    }
  }, [isSuccess]);

  const email = userSignUp.email;
  const password = userSignUp.password;

  const onSubmit = () => {
    triggerSignUp({ email, password });
  };

    const passwordInputValidations = useMemo(() => {
        if (rulesPassword && !focusedPasswordInput) {
            return (
                <Text style={styles.rules}>
                The password must be between 8 and 16 characters, at least one
                digit, at least one lowercase letter, and at least one uppercase
                letter. It may have other symbols.
                </Text>
            )
        } else if (focusedPasswordInput && inputInvalidPassword) {
            return (<Text style={styles.error}>Password invalid</Text>);
        }
        return <Text>{" "}</Text>
    }, [rulesPassword, inputInvalidPassword, focusedPasswordInput]);




  return (
    <View style={styles.allContainer}>
      {showSuccessMessage ? (
        <SuccesfulText/>

) : (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Create an</Text>
            <Text style={styles.title2}>account</Text>
          </View>
          <View>
            <Text style={styles.text}>Email</Text>
            <TextInput
              value={userSignUp.email}
              label="Email"
              name="email"
              onChangeText={(text) =>
                setUserSignUp({ ...userSignUp, email: text })
              }
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
              name="password"
              value={userSignUp.password}
              onChangeText={(text) =>
                setUserSignUp({ ...userSignUp, password: text })
              }
              style={styles.input}
              onFocus={allowPasswordErrorMessage}
            />
            <Text style={styles.ghostText}>{" "}</Text>
            { passwordInputValidations }
          </View>
          <View>
            <Text style={styles.text}>Confirm Password</Text>
            <TextInput
              label="Confirm Password"
              name="confirmPassword"
              value={userSignUp.confirmPassword}
              onChangeText={(text) =>
                setUserSignUp({ ...userSignUp, confirmPassword: text })
              }
              style={styles.input}
              onFocus={allowConfirmPasswordErrorMessage}
            />
            {inputInvalidConfirmPassword && focusedConfirmPasswordInput ? (
              <Text style={styles.error}>Passwords not match</Text>
            ) : (
              <Text style={styles.ghostText}>{" "}</Text>
            )}
          </View>

          <SubmitButton title="Send" onPress={onSubmit} someFieldEmpty={someFieldEmpty} />
          <View>
            <Text style={styles.alreadyText}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}>Login</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  allContainer: {
    height: "100%",
    placecontent: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "white",
    width: "80%",
    alignSelf: "center",
    textAlignLast: "center",
    height: "50%",
    justifyContent: "center",
    height: "80%",
    placecontent: "center",
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 5,
    alignSelf: "center",
  },
  title: {
    fontFamily: "PoppinBold",
    color: colors.strongGray,

    fontSize: 20,
  },
  title2: {
    fontFamily: "PoppinBold",
    marginBottom: 30,
    color: colors.lilac,

    fontSize: 20,
  },
  alreadyText: {
    fontFamily: "PoppinSemiRegular",
    color: colors.strongGray,
    fontSize: 12,
    textAlign: "center",
  },
  loginText: {
    fontFamily: "PoppinSemiRegular",
    color: colors.lilac,
    fontSize: 14,
    textAlign: "center",
  },
  input: {
    width: "70%",
    alignSelf: "center",
    backgroundColor: colors.lightGray,
    borderRadius: 5,
    marginTop: 5,
    height: 22,
    marginBottom: 20,
  },
  text: {
    fontFamily: "PoppinSemiRegular",
    color: colors.strongGray,
    fontSize: 12,
    width: "70%",
    alignSelf: "center",
  },
  error: {
    color: colors.error,
    position: "relative",
    bottom: 10,
    width: "70%",
    alignSelf: "center",
    fontFamily: "PoppinSemiRegular",
    fontSize: 12,
  },
  rules: {
    textAlign: "center",
    color: colors.strongGray,
    position: "relative",
    bottom: 10,
    fontSize: 12,
    width: "70%",
    alignSelf: "center",
    fontFamily: "PoppinSemiRegular",
    fontStyle: "italic"
  },
  ghostText: {
    height: 0
  }
});
