import React, { useState } from "react";
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  state = {
    credentials: {
      username: '',
      password: '',
    }
  }

  onChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      }
    })
  }

  login = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        this.props.history.push('/colors')
        this.props.setIsLoading(true)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render(){
    if(this.state.isLoading === true){
      return(
          'Page is loading...'
      )
    }
    else return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <form onSubmit={this.login}>
          <input 
            type='text' 
            name='username' 
            value={this.state.credentials.username} 
            onChange={this.onChange} 
            placeholder='Username'
          />
          <input 
            type='password'
            name='password' 
            value={this.state.credentials.password} 
            onChange={this.onChange} 
            placeholder='Password'
          />
          <button>Login</button>
        </form>
      </div>
    </>
    )
  }
};

export default Login;
