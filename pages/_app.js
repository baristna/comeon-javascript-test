import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import styled, { createGlobalStyle } from 'styled-components';
import { AuthProvider } from '../contexts/auth'

const GlobalStyle =  createGlobalStyle`
  html,
  body {
    background: #444;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Logo = styled.img`
  width: 50%;
`

class Comeon extends App {
	render() {
    const { Component, pageProps } = this.props;
    
		return (
      <Provider store={store}>
        <AuthProvider>
          <LogoWrapper>
            <Logo src="/logo.svg" alt="Comeon Logo" />
          </LogoWrapper>
          <Component {...pageProps} />
          <GlobalStyle />
        </AuthProvider>
      </Provider>
		);
	}
}

export default Comeon;
