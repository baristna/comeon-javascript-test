import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components';
import { Container, Panel, Button } from '../components';
import { useAuth } from '../contexts/auth';
import { fetchGames } from '../actions';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Bar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`

const Title = styled.div`
  flex-grow: 1;
  font-weight: 600;
  font-size: 24px;
`

const GamePage = ({ dispatch, games }) => {
  const router = useRouter();
  const auth = useAuth();
  const [gameObj, setGameObj] = useState('');
  
  useEffect(() => {
    dispatch(fetchGames())
  }, [])

  useEffect(() => {
    if (games && router.query.code) {
      setGameObj(games.find(i => i.name.toLowerCase() === router.query.code.toLowerCase()))
    }
  }, [games, router.query.code])

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
          <span>
            <Bar>
              <Title>{gameObj.name}</Title>
              <Button
                href='/games'
                iconStart='fas fa-chevron-left'
                secondary
              >
                Back
              </Button>
            </Bar>
            <div id='game-launch'></div>
          </span>
        </Wrapper>
      </Container>
    </div>
  ) : null
}

const mapStateToProps = (state) => {
  let { games } = state;
  return { games: games.list }
}

export default connect(mapStateToProps)(GamePage);
