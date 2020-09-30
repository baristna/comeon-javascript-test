import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { Container } from '../components';


const GamePage = () => {
  const router = useRouter()

  useEffect(() => {
    window.comeon.game.launch(router.query.code)
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Game</title>
      </Head>
      <Container>
        <div id='game-launch'></div>
      </Container>
    </div>
  )
}

export default GamePage
