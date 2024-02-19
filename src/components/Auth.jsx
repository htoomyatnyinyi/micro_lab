import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signin, settoken } from '../rdx/authSlice.js'
import axios from 'axios'

const Auth = () => {
  const e_ref = useRef(null)
  const p_ref = useRef(null)

  const dispatch = useDispatch()
  console.log(useSelector(state => state.s_auth))
  const { s_email, s_password } = useSelector(state => state.s_auth)

  const submitHandler = async (e) => {
    e.preventDefault(e)
    // console.log('Hi', e)
    // console.log(e_ref.current.value)
    // console.log(p_ref.current.value)
    const email = e_ref.current.value
    const password = p_ref.current.value

    if (email && password) {
      console.log(email, password)
      try {
        const response = await axios.post('http://localhost:8080/mlab/signin', {
          email,
          password,
        });
        const jwtToken = response.data.token;
        console.log(jwtToken)
        localStorage.setItem('jwtToken', jwtToken); // key: value localStorage.jwtToken = token data


        dispatch(signin({ email, password, isLoggedIn: true })) // signin.s_email , signin.s_password = action.payload
        dispatch(settoken(jwtToken))


      } catch (err) {
        console.error('SignIn Fail', err);
        alert('Login failed. Please check your credentials.');
      }

    } else {
      alert('Please Enter Both email and password')
    }

    // dispatch(signin({ email, password })) // signin.s_email , signin.s_password = action.payload
    // dispatch(settoken(jwtToken))



  }
  return (
    <div className='bg-slate-100 p-2 m-2 rounded-md'>
      <div>
        <h1>Using Ref Form ..</h1>
      </div>
      <form onSubmit={submitHandler}>
        <input type="email" name="email" ref={e_ref} placeholder='Enter you emails' />
        <input type="password" name="password" ref={p_ref} placeholder='Enter you Password' />
        <button type='submit'>SignIn</button>
      </form>
    </div>
  )
}

export default Auth