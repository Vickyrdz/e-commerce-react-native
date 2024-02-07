import { useState } from "react";

export default function () {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });


  const [focusedEmailInput, setFocusedEmailInput] = useState(false);
  const [focusedPasswordInput, setFocusedPasswordInput] = useState(false);

  const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
    userLogin
    .email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/.test(
    userLogin
    .password
  );


  const inputInvalidEmail = !isEmail || userLogin.email == '';
  const inputInvalidPassword = !isPassword;


  const rulesPassword = userLogin.password == '';

  const someFieldEmpty = !isEmail || !isPassword; 


  const allowEmailErrorMessage = () => {
    setFocusedEmailInput(true);
  };
  const allowPasswordErrorMessage = () => {
    setFocusedPasswordInput(true);
  };



  return {
    userLogin,
    setUserLogin,
    rulesPassword,
    someFieldEmpty,
    inputInvalidEmail,
    focusedEmailInput,
    allowEmailErrorMessage,
    inputInvalidPassword,
    focusedPasswordInput,
    allowPasswordErrorMessage,
  };
}
