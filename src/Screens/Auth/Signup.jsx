import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { onSignUpUser } from '../../Services/Redux/User/UserAction';
import { inputValidate } from '../../Shared/Helper/Helper';


export const Signup = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValidate, setIsValidate] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigate()


  const validateValue = (value, type) => {
    const data = inputValidate(value, type)

    if (data.dataType === 'first_name') {
      setFirstNameError(data.firstNameError);
      setFirstName(data.response);
    }

    if (data.dataType === 'last_name') {
      setLastNameError(data.lastNameError);
      setLastName(data.response);
    }

    if (data.dataType === 'email') {
      setEmailError(data.emailError);
      setEmail(data.response);
    }

    if (data.dataType === 'password') {
      setPasswordError(data.passwordError);
      setPassword(data.response);
    }

    if (!data.emailError && !data.passwordError) {
      setIsValidate(true)
    } else {
      setIsValidate(false)
    }

    if (!data.emailError && !data.passwordError && !data.firstNameError && !data.lastNameError) {
      setIsValidate(true)
    } else {
      setIsValidate(false)
    }

  }

  const handelSubmit = () => {
    if (!email || !password || !first_name || !last_name) {
      alert('All feilds are required')
      return
    }

    if (isValidate) {
      dispatch(onSignUpUser(first_name,last_name,email,password,navigation))
    }
  }

  return (
    <div className='auth min-h-screen flex items-center justify-center'>
      <div className="flex form-group-content p-5 rounded-lg">
        <div className="form-content p-3">
          <div className="logo mb-5">
            <p className='text-2xl font-bold'>Code Editor</p>
          </div>
          <div className="auth-heading mb-6">
            <div className="heading">
              <h4 className='text-xl mb-2'>Wellcome Back!</h4>
              <p className='text-slate-500 text-sm'>Please enter sign up details below</p>
            </div>
          </div>
          <form className='form'>
            <div className="relative my-4">
              <input onChange={(e) => validateValue(e.target.value, "first_name")} 
              style={{borderColor:firstNameError? 'red':''}}
              type="text" className='form-input ' placeholder="" />
              <label className="form-lable" style={{color:firstNameError? 'red':''}}>First Name</label>
            </div>
            {firstNameError ? <p className='error-msg px-4'>{firstNameError}</p> : ''}

            <div className="relative my-4">
              <input onChange={(e) => validateValue(e.target.value, "last_name")} 
              style={{borderColor:lastNameError? 'red':''}}
              type="text" className='form-input ' placeholder="" />
              <label className="form-lable" style={{color:lastNameError? 'red':''}}>Last Name</label>
            </div>
            {lastNameError ? <p className='error-msg px-4'>{lastNameError}</p> : ''}

            <div className="relative my-4">
              <input onChange={(e) => validateValue(e.target.value, "email")} 
              style={{borderColor:emailError? 'red':''}}
              type="email" className='form-input ' placeholder="" />
              <label className="form-lable" style={{color:emailError? 'red':''}}>Email</label>
            </div>
            {emailError ? <p className='error-msg px-4'>{emailError}</p> : ''}

            <div className="relative my-4">
              <input onChange={(e) => validateValue(e.target.value, "password")} 
              style={{borderColor:passwordError? 'red':''}}
              type="text" className='form-input ' placeholder="" />
              <label className="form-lable" style={{color:passwordError? 'red':''}}>Password</label>
            </div>
            {passwordError ? <p className='error-msg px-4'>{passwordError}</p> : ''}

          </form>
          <div className="flex justify-end items-center my-5">
            <NavLink className="text-sm">
              Forget Password?
            </NavLink>
          </div>

          <div className="btns-group">
            <button onClick={handelSubmit} type='submit' className='border-none outline-none w-full bg-black text-zinc-100 p-2 rounded-lg'>
              Sign up
            </button>
          </div>

          <div className="flex justify-center items-center my-5 mb-0">
            <p className='text-slate-400 text-sm'>Already have an accout? <NavLink to={"/signin"} className={"text-slate-900 text-md"}>Sign in</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  )
}
