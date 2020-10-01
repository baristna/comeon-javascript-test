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

const Errors = styled.ul`
  color: #F00;
  margin-bottom: 20px;
`

const LoginPage = ({ dispatch, session }) => {
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUser, setErrorUser] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handlers = {
    username: setUsername,
    password: setPassword
  }

  const handleOnChange = (e, field) => {
    setErrors([]);
    
    handlers[field](e.currentTarget.value);
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      formSubmit();
    }
  }

  const formSubmit = () => {
    const errs = []
    if (username && password) {
      dispatch(login({ username, password }))
    }

    if (username === '') {
      setErrorUser(true);
      errs.push('Username is empty')
    }

    if (password === '') {
      setErrorPassword(true);
      errs.push('Password is empty')
    }

    setErrors(errs)
  }

  useEffect(() => {
    dispatch(loginCheck())
  }, [])

  useEffect(() => {
    if (session.error) {
      setErrors([session.error.data.error])
    }

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
              onChange={(e) => { setErrorUser(false); handleOnChange(e, 'username')}}
              style={{ marginBottom: '10px' }}
              placeholder='Username'
              icon='fas fa-user'
              error={errorUser}
              onKeyDown={handleKeyDown}
            />
            <TextField
              big
              type='password'
              value={password}
              onChange={(e) => { setErrorPassword(false); handleOnChange(e, 'password') }}
              placeholder='Password'
              style={{ marginBottom: '10px' }}
              icon='fas fa-key'
              error={errorPassword}
              onKeyDown={handleKeyDown}
            />
            {!!errors.length && (
              <Errors>
                {errors.map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </Errors>
            )}
            <Button
              big
              iconStart='fas fa-chevron-right'
              onClick={formSubmit}
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
