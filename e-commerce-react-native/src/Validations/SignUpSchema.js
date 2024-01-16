import { object, string, ref } from 'yup'; 

export const signUpSchema = object({
    email:string().email("Enter a valid email").required("Enter a email"),
    password:string().min(6, "Min 6 characters").required("Enter a password"),
    confirmPassword:string().oneOf([ref("password"), "Passwords do not match"]).required("re-enter password")
})