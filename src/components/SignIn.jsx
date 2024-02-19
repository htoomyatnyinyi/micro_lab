import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../rdx/authSlice.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { s_email, s_password, s_isLoggedIn } = useSelector(state => state.s_auth);

  // Create refs for the email and password inputs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async () => {
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (emailValue && passwordValue) {
      try {
        // Replace 'your-backend-endpoint' with the actual endpoint for your authentication
        const response = await axios.post('http://localhost:8080/mlab/signin', {
          s_email: emailValue,
          s_password: passwordValue,
        });

        // Assuming the backend returns a token or some authentication info
        const jwtToken = response.data.token;
        localStorage.setItem('mlab', jwtToken);

        dispatch(signin.s_token(jwtToken));

        navigate('/profile');
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials.');
      }
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div>
      {s_isLoggedIn ? (
        <p>Welcome, {s_email}!</p>
      ) : (
        <form>
          <label>
            Username:
            <input
              type="email"
              ref={emailRef}
              value={s_email}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              ref={passwordRef}
              value={s_password}
            />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      )}
      <div>
      </div>
    </div>
  );
};

export default SignIn;

