import { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '../contexts/auth';
import { Container } from '../components';

const ListPage = () => {
  const auth = useAuth();
  const [games, setGames] = useState([])

  const getGames = async () => {
    try {
      const response = await fetch('http://localhost:3001/games');
      const games = await response.json()
      if (!games.error) {
        setGames(games)
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getGames()
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
          {games.map(game => (
            <tr>
              <td><img src={game.icon} alt={game.name}/></td>
              <td><h2>{game.name}</h2><p>{game.description}</p></td>
              <td><Link href={`/game?code=${game.code}`}>PLAY</Link></td>
            </tr>
          ))}
        </table>
      </Container>
    </div>
  ) : null
}

export default ListPage
