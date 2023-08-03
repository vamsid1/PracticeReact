import {useFormik}  from 'formik';
import React from 'react';
import './App.css';
 //import {yup} from 'yup';
import { signupSchema} from './index1';
 
const initialValues ={
  name:'',
  email:'',
  password:'',
  Cpassword:''

}
const App = ()  => {
  
  const {values,handleBlur,handleChange,handleSubmit, errors } =useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit:(values) => {
      console.log(values);
    }
  }); 
  console.log(errors);

    return <div className='app'>
      <form className='signup_form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label><br />
        <input type='text' name='name' value={values.name} onBlur={handleBlur} onChange={handleChange}/><br />

        <label htmlFor='email'>Email</label><br />
        <input type='text' name='email'value={values.email} onBlur={handleBlur} onChange={handleChange} /><br />

        <label htmlFor='password'>Password</label><br />
        <input type='text' name='password'value={values.password} onBlur={handleBlur} onChange={handleChange} /><br />

        <label htmlFor='Cpassword'>Conform Password</label><br />
        <input type='text'  name='Cpassword'value={values.Cpassword} onBlur={handleBlur} onChange={handleChange} /><br />

        <button id='button' type='Submit'>Submit</button> 

      </form>
    </div>
};

export default App;