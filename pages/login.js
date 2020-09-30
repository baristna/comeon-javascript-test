import { useState } from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { Container, TextField, Button } from '../components';
import request from '../request';

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlers = {
    username: setUsername,
    password: setPassword
  }

  const handleOnChange = (e, field) => {
    handlers[field](e.currentTarget.value);
  }

  const login = () => {
    request({
      method: 'post',
      url: '/login',
      data: { username, password }
    })
    .then((response) => {
      const { player } = response.data
      Cookies.set('token', JSON.stringify({
        username,
        ...player
      }));

      window.location.href = '/list'
    })
    .catch(err => {
      console.log(err)
    });
  }

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <LoginForm>
          <TextField
            value={username}
            onChange={(e) => handleOnChange(e, 'username')}
            style={{ marginBottom: '10px' }}
            placeholder='Username'
          />
          <TextField
            type='password'
            value={password}
            onChange={(e) => handleOnChange(e, 'password')}
            placeholder='Password'
            style={{ marginBottom: '10px' }}
          />
          <Button onClick={login}>
              Login <i aria-hidden className="fas fa-chevron-right"></i>
          </Button>
        </LoginForm>
      </Container>
    </div>
  )
}

export default LoginPage
