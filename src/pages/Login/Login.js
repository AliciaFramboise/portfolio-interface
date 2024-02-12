import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';
import api from "../../api";
import axios from "axios";

export default function Login() {
  const auth_url = `${api}auth`;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [authFailed, setAuthFailed] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    axios.post(`${auth_url}/token`, formData,
    {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      console.log(response.data); 
      console.info("Successfully authenticated");
      navigate('/portfolio');
    })
    .catch((error) => {
      console.error('Could not authenticate the user:', error);
      setFormData({
        username: '',
        password: '',
      });
      setAuthFailed(true);
    });

  };

  return (
    <div className='login-page'>
        <div className='login-container'>
            <h1> Welcome </h1>
            <form className="login-form"  onSubmit={handleLogin}>
                <input type="text" name="username" value={formData.username} placeholder="username" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}/>
                <input type="text" name="password" value={formData.password} placeholder="password" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}/>
                <button type="submit">LOG IN</button>
                {authFailed ? <p> Incorrect password or username </p> : null}
            </form>
            <h2> New User ? </h2>
            <button>SIGN IN</button>
        </div>
    </div>
  )
}
