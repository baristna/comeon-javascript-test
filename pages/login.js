import { useState } from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import { Container, TextField, Button } from '../components';

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

  const tryLogin = async () => {
    try {
      const response = await fetch(
        'http://localhost:3001/login',
        {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username,
            password: password
          })
        }
      );
      const profile = await response.json()
      if (profile.error) {
        console.log(null)
      } else {
        console.log(profile)
      }
    } catch (err) {
      console.error(err)
    }
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
          <Button onClick={tryLogin}>
              Login <i className="fas fa-chevron-right"></i>
          </Button>
        </LoginForm>
      </Container>
    </div>
  )
}

export default LoginPage
