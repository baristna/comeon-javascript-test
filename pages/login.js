import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components';
import { Container, TextField, Button } from '../components';
// Actions
import {
  login,
  loginCheck,
} from '../actions';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const LoginForm = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`

const LoginPage = ({ dispatch, session }) => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlers = {
    username: setUsername,
    password: setPassword
  }

  const handleOnChange = (e, field) => {
    handlers[field](e.currentTarget.value);
  }

  useEffect(() => {
    dispatch(loginCheck())
  }, [])

  useEffect(() => {
    if (session.player) {
      router.push('/games')
    }
  }, [session])

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <Wrapper>
          <LoginForm>
            <h1>LOGIN</h1>
            <TextField
              big
              value={username}
              onChange={(e) => handleOnChange(e, 'username')}
              style={{ marginBottom: '10px' }}
              placeholder='Username'
              icon='fas fa-user'
            />
            <TextField
              big
              type='password'
              value={password}
              onChange={(e) => handleOnChange(e, 'password')}
              placeholder='Password'
              style={{ marginBottom: '10px' }}
              icon='fas fa-key'
            />
            <Button
              big
              iconStart='fas fa-chevron-right'
              onClick={() => { dispatch(login({ username, password })) }}
              style={{ alignSelf: 'flex-end' }}
            >
              Login
            </Button>
          </LoginForm>
        </Wrapper>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  let { session } = state;
  return { session }
}

export default connect(mapStateToProps)(LoginPage);
