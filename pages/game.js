import { useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components';
import { Container, Panel, Button } from '../components';
import { useAuth } from '../contexts/auth';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Bar = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`

const GamePage = () => {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (auth && router.query.code) {
      window.comeon.game.launch(router.query.code)
    }
  }, [router.query.code])

  return auth ? (
    <div className="container">
      <Head>
        <title>Game</title>
      </Head>
      <Container>
        <Panel {...auth} />
        <Wrapper>
          <Bar>
            <Button
              href='/games'
              iconStart='fas fa-chevron-left'
              secondary
              style={{ marginBottom: '10px' }}
            >
              Back
            </Button>
            <div id='game-launch'></div>
          </Bar>
        </Wrapper>
      </Container>
    </div>
  ) : null
}

export default GamePage
