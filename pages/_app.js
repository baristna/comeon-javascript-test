import App from 'next/app';
import React from 'react';
import Link from 'next/link'
import { createGlobalStyle } from 'styled-components';
import { AuthProvider } from '../contexts/auth'

const GlobalStyle =  createGlobalStyle`
  html,
  body {
    background: #CCC;
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

export default class Comeon extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
        <AuthProvider>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/list">
              <a>List</a>
            </Link>
          </li>
          <li>
            <Link href="/game">
              <a>Game</a>
            </Link>
          </li>
        </ul>
          <Component {...pageProps} />;
          <GlobalStyle />
        </AuthProvider>
			</>
		);
	}
}
