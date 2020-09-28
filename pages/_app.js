import App from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

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

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Component {...pageProps} />;
				<GlobalStyle />
			</>
		);
	}
}
