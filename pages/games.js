import { useEffect } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '../contexts/auth';
import { Container } from '../components';
import { fetchGames } from '../actions';

const ListPage = ({ dispatch, games }) => {
  const auth = useAuth();

  useEffect(() => {
    dispatch(fetchGames())
  }, [])

  return auth ? (
    <div className="container">
      <Head>
        <title>Games</title>
      </Head>
      <Container>
        <img src={auth.avatar} />
        {auth.name} {auth.event}
        <hr />
        <h3>Games</h3>
        <hr />
        <table>
          <tbody>
            {games && games.map(game => (
              <tr key={game.name}>
                <td><img src={game.icon} alt={game.name}/></td>
                <td><h2>{game.name}</h2><p>{game.description}</p></td>
                <td><Link href={`/game?code=${game.code}`}>PLAY</Link></td>
              </tr>
            ))} 
          </tbody>
        </table>
      </Container>
    </div>
  ) : null
}

const mapStateToProps = (state) => {
  let { games } = state;
  return { games: games.list }
}

export default connect(mapStateToProps)(ListPage);
