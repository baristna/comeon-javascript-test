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

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
          <Button onClick={() => { dispatch(login({ username, password })) }}>
              Login <i aria-hidden className="fas fa-chevron-right" style={{ marginLeft: '10px'}} />
          </Button>
        </LoginForm>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  let { session } = state;
  return { session }
}

export default connect(mapStateToProps)(LoginPage);
