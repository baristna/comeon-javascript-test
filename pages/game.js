import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { Container } from '../components';
import { useAuth } from '../contexts/auth';

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
        <div id='game-launch'></div>
      </Container>
    </div>
  ) : null
}

export default GamePage
