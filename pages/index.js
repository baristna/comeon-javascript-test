import Head from 'next/head'
import styled from 'styled-components';

const Main = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`

const ALink = styled.a`
  color: #0070f3;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`

const HomePage = () => {

  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      <Main>
        <Title>
          Welcome to <ALink href="https://nextjs.org">Next.js!</ALink>
        </Title>
      </Main>
    </div>
  )
}

export default HomePage
