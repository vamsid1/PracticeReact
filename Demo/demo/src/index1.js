import * as Yup from 'yup';
const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

export const signupSchema = Yup.object({
  name: Yup.string().min(3).required('Please Enter your name'),
  email: Yup.string().email('Email is Required').required('Please Enter your name'),
  password: Yup.string().matches(passwordRegex,'Please Enter valid password').required('Please Enter your password'),
  Cpassword:Yup.string().oneOf([Yup.ref("password")], "password do not match!").required('Please Enter Confirm password.')
})