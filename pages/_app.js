import App from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../store';
import { AuthProvider } from '../contexts/auth'
import { Header } from '../components';

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

class Comeon extends App {
	render() {
    const { Component, pageProps } = this.props;
    
		return (
      <Provider store={store}>
        <AuthProvider>
          <Header />
          <Component {...pageProps} />
          <GlobalStyle />
        </AuthProvider>
      </Provider>
		);
	}
}

export default Comeon;
