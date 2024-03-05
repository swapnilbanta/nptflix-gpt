import React from 'react'
import Header from './Header'
import { useState } from 'react';
const Login = () => {
  const [isSignInForm,setIsSignForm] = useState(true);
  const toggleSignForm = ()=>{
    setIsSignForm(!isSignInForm);
      
  }
  return (
   
    <div >
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>

      </div>
      
      <form className='w-3/12 absolute p-12 bg-black  my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up" }</h1>
      {!isSignInForm &&  <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
      
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
<button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up" }</button>
<p className='p-6 cursor-pointer' onClick={toggleSignForm}>
{isSignInForm?"New To Netflix ? Sign up Now":"Already Registered ?Sign Now" }
  </p>
      </form>

    </div>
  )
}

export default Login
