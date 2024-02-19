import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setprofile } from '../rdx/authSlice'
import axios from 'axios'

const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { s_email, s_isLoggedIn } = useSelector((state) => state.s_auth)


  // Example of storing and sending an authentication token in a front-end application
  // console.log("Token From Web,", localStorage.getItem('jwtToken'))
  const o_jwtToken = localStorage.getItem('jwtToken')
  console.log('From Web Storage ', o_jwtToken)

  const getSecretData = async () => {
    // console.log(`Bearer ${o_jwtToken}`)

    axios.defaults.headers.common['Authorization'] = `Bearer ${o_jwtToken}`
    const res_data = await axios.get('http://localhost:8080/secret')
    // console.log(res_data.data.secret, 'from secret data backend')
    console.log(res_data.data.decodedData, 'from secret data backend')
    dispatch(setprofile({ profile: res_data.data.decodedData, isLoggedIn: true, s_token: o_jwtToken }))
    // try {
    // } catch (err) {
    //   console.error('Not Working', err)
    //   // console.log(axios.defaults.headers)
    // }
  }

  const handelSignOut = () => {
    localStorage.removeItem('jwtToken')
    console.log('Token Already Removed!')
    // dispatch(signout())
    navigate('/')
  }


  return (
    <div>
      <div className='h-screen bg-slate-400 rounded-md p-4 m-1'>
        <Link to='/' className='h-screen bg-slate-100 rounded-md p-2 m-1'>Go Home</Link>
        <button onClick={getSecretData}>Get Secret Data for  </button>
        {s_isLoggedIn ?
          <div>
            <button onClick={handelSignOut} className='bg-black p-2 m-1 '>SignOut</button>
            <h1 className='h-screen bg-cyan-400 rounded-md p-4 m-1'>Welcom to Profile Dashboard {s_email}</h1>
          </div>
          :
          <div >
            <h1>There is no Profile for you ... you need to create new accout.. </h1>
            <Link to='/register'>Need to Register</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Dashboard

