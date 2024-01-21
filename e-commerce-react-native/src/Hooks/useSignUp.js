import { useState } from "react";

export default function () {
  const [userSignUp, setUserSignUp] = useState({
    email: "",
    password: "",
    confirmPassword: '', 
  });

//   const handleChange = (e) => {
//     setUserSignUp({
//       ...userSignUp,
//       [e.target.name]: e.target.value,
//     });
//   };

  const [focusedEmailInput, setFocusedEmailInput] = useState(false);
  const [focusedPasswordInput, setFocusedPasswordInput] = useState(false);
  const [focusedConfirmPasswordInput, setFocusedConfirmPasswordInput] = useState(false);

  const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
    userSignUp.email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/.test(
    userSignUp.password
  );
  const isConfirmPassword = userSignUp.confirmPassword === userSignUp.password

  const inputInvalidEmail = !isEmail || userSignUp.email == '';
  const inputInvalidPassword = !isPassword;
  const inputInvalidConfirmPassword = !isConfirmPassword


  const rulesPassword = userSignUp.password == '';

  const someFieldEmpty =
  !isEmail || !isPassword || !isConfirmPassword; 


  const allowEmailErrorMessage = () => {
    setFocusedEmailInput(true);
  };
  const allowPasswordErrorMessage = () => {
    setFocusedPasswordInput(true);
  };
  const allowConfirmPasswordErrorMessage = () => {
    setFocusedConfirmPasswordInput(true);
  };


  return {
    userSignUp,
    setUserSignUp,
    rulesPassword,
    someFieldEmpty,
    inputInvalidEmail,
    focusedEmailInput,
    allowEmailErrorMessage,
    inputInvalidPassword,
    focusedPasswordInput,
    allowPasswordErrorMessage,
    inputInvalidConfirmPassword,
    focusedConfirmPasswordInput,
    allowConfirmPasswordErrorMessage
  };
}
