import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '../contexts/auth';
import { Container } from '../components';
import { fetchGames } from '../actions';

const GamesWrapper = styled.div`
  display: flex;
`

const GamesList = styled.div`
  flex: 0 0 70%;
  margin-right: 30px;
`

const GamesSide = styled.div`
  flex: 1 1 auto;
`

const Title = styled.h3`
  padding-bottom: 0.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const Category = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`

const categoryNames = {
  0: 'All',
  1: 'Video Slots',
  2: 'Slot Machines'
}

const ListPage = ({ dispatch, games }) => {
  const auth = useAuth();
  const [cat, setCat] = useState(0);

  useEffect(() => {
    dispatch(fetchGames())
  }, [])

  return auth ? (
    <div className="container">
      <Head>
        <title>Games</title>
      </Head>
      <Container style={{ marginBottom: '30px' }}>
        <img src={auth.avatar} />
        {auth.name} {auth.event}
        <Link href='/logout'>Logout</Link>
        <GamesWrapper>
          <GamesList>
            <Title>Games</Title>
            <table>
              <tbody>
                {games && games.map(game => {
                  const filter = game.categoryIds.includes(parseInt(cat));
                  return filter && (
                    <tr key={game.name}>
                      <td><img src={game.icon} alt={game.name}/></td>
                      <td><h2>{game.name}</h2><p>{game.description}</p></td>
                      <td><Link href={`/game?code=${game.code}`}>PLAY</Link></td>
                    </tr>
                  )
                })} 
              </tbody>
            </table>
          </GamesList>
          <GamesSide>
            <Title>Categories</Title>
            {Object.entries(categoryNames).map(([key, value]) => (
              <Category onClick={() => setCat(key)}>{value}</Category>
            ))}
          </GamesSide>
        </GamesWrapper>
      </Container>
    </div>
  ) : null
}

const mapStateToProps = (state) => {
  let { games } = state;
  return { games: games.list }
}

export default connect(mapStateToProps)(ListPage);
