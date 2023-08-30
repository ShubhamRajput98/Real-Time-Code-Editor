import React, { useEffect, useState } from 'react'
import './Auth.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import { inputValidate } from '../../Shared/Helper/Helper'
import { useDispatch, useSelector } from 'react-redux'
import { onLoginUser } from '../../Services/Redux/User/UserAction'
import jwtDecode from 'jwt-decode';

export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValidate, setIsValidate] = useState(false);
  const [inputType, setInputType] = useState('password');
  const [expire, setExpire] = useState(true);


  const dispatch = useDispatch();
  const navigation = useNavigate();

  const { loading } = useSelector(state => state.user)

  useEffect(() => {
    // check token is expire or not
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convert to seconds since Unix epoch
        // Check if the token has expired
        if ((decodedToken.exp < currentTime) !== true) {
          setExpire(false)
          navigation('/dashboard')
          return
        } else {
         navigation('/')
        //  localStorage.clear()
        };
      } catch (error) {
        // Handle any decoding errors
        console.error('Error decoding token:', error);
        setExpire(true); // Assume token is expired in case of error
      }
    }

  }, [navigation])



  const validateValue = (value, type) => {
    const data = inputValidate(value, type)

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

  }

  const handelSubmit = () => {

    if (!email || !password) {
      alert('All feilds are required')
      return
    }

    if (isValidate) {
      dispatch(onLoginUser(email, password, navigation))
    }

  }



  return (
    <>
      {expire ? <div className='auth min-h-screen flex items-center justify-center'>
        <div className="flex form-group-content p-5 rounded-lg">
          <div className="form-content p-3">
            <div className="logo mb-5">
              <p className='text-2xl font-bold'>Code Editor</p>
            </div>
            <div className="auth-heading mb-6">
              <div className="heading">
                <h4 className='text-xl mb-2'>Wellcome Back!</h4>
                <p className='text-slate-500 text-sm'>Please enter log in details below</p>
              </div>
            </div>
            <form className='form'>
              <div className="relative my-4">
                <input style={{ borderColor: emailError ? 'red' : '' }} type="email" className='form-input' required placeholder="" onChange={(e) => validateValue(e.target.value, 'email')} />
                <label style={{ color: emailError ? 'red' : '' }} className="form-lable">Email</label>
              </div>
              {emailError ? <p className='error-msg px-4'>{emailError}</p> : ''}

              <div className="relative my-4">
                <input style={{ borderColor: passwordError ? 'red' : '' }} onChange={(e) => validateValue(e.target.value, 'password')} required type={inputType} className='form-input ' placeholder="" />
                <label style={{ color: passwordError ? 'red' : '' }} className="form-lable">Password</label>
                <div className="eyes">
                  {
                    inputType === 'password' ? <VscEyeClosed onClick={() => setInputType("type")} /> :
                      <VscEye onClick={() => setInputType("password")} />
                  }
                </div>
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
                {loading ? 'Sign in...' : 'Sign in'}
              </button>
              <div className="continue flex justify-center items-center my-5 relative">
                <p className='text-slate-400 text-sm'>or continue</p>
              </div>
              <button type='submit' className='flex justify-center items-center border border-solid border-slate-300 outline-none w-full p-2 rounded-lg'>
                <FcGoogle className='me-2' /> Log in with Google
              </button>
            </div>

            <div className="flex justify-center items-center my-5 mb-0">
              <p className='text-slate-400 text-sm'>Don't have an accout? <NavLink to={"/signup"} className={"text-slate-900 text-md"}>Sign up</NavLink></p>
            </div>
          </div>
        </div>
      </div> : ''}
    </>
  )
}
