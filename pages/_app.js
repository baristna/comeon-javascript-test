import App from 'next/app';
import React from 'react';
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

export default class Comeon extends App {
	render() {
    const isServer = () => typeof window === `undefined`;
		const { Component, pageProps } = this.props;
		return (
      <AuthProvider>
        <LogoWrapper>
          <Logo src="/logo.svg" alt="Comeon Logo" />
        </LogoWrapper>
        <Component {...pageProps} />
        <GlobalStyle />
      </AuthProvider>
		);
	}
}
