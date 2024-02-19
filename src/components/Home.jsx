import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import img from './images/01.jpg'
import Auth from './Auth'


const Home = () => {
  const { s_username, s_isLoggedIn } = useSelector(state => state.s_auth)

  const handelSignOut = () => {
    localStorage.removeItem('jwtToken')
    console.log('Token Already Removed!')
    // dispatch(signout())
    navigate('/')
  }
  return (
    <div>
      {/* <div className='bg-slate-400 h-screen p-2'>
      </div> */}
      <div className='flex-auto p-1 bg-slate-400 h-screen'>
        <div className='flex-auto p-1 bg-slate-400 '>
          <Link to="auth" className='bg-gray-100 p-2 rounded-md m-1'>Here to SignIn</Link>
          <Link to="dashboard" className='bg-gray-100 p-2 rounded-md m-1'>Here to Dashboard</Link>
        </div>
        {s_isLoggedIn ?
          (
            <div>
              <h3 className='bg-gray-200 p-1 m-1 text-pretty text-3xl rounded-md text-center flex-wrap'>Hi form MicroLab --- {s_username}</h3>
              <div className='bg-grey-500 p-1 rounded-md m-1'>
                <img src={img} alt='img' height={500} width={700} />
              </div>
            </div>
          )
          :
          (
            <div>
              <h1>Welcome New User .. You need to register before start using our platform..</h1>
              <button onClick={handelSignOut}>SignOut</button>
              <Auth />
            </div>
          )
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5 className="text-3xl font-bold underline">Learn React</h5>
        </a>;
      </div>

    </div>
  )
}

export default Home

