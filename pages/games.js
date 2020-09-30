import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Head from 'next/head'
import { useAuth } from '../contexts/auth';
import { Container, Panel, TextField, GameCard } from '../components';
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
  const [search, setSearch] = useState('');

  const gamesFilter = () => (
    games.filter(game => (
      game.categoryIds.includes(parseInt(cat)) &&
      (search === '' || game.name.toLowerCase().includes(search.toLowerCase()))
    ))
  )
  
  useEffect(() => {
    dispatch(fetchGames())
  }, [])

  return auth ? (
    <div className="container">
      <Head>
        <title>Games</title>
      </Head>
      <Container style={{ marginBottom: '30px' }}>
        <Panel {...auth} />
        <GamesWrapper>
          <GamesList>
            <Title>Games</Title>
            {gamesFilter().map(game => <GameCard {...game} />)}
          </GamesList>
          <GamesSide>
            <Title>Search</Title>
            <TextField
              value={search}
              onChange={e => setSearch(e.currentTarget.value)}
              placeholder='Search'
              icon='fas fa-search'
              style={{ width: '100%' }}
            />

            <Title style={{ marginTop: '20px'}}>Categories</Title>
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
