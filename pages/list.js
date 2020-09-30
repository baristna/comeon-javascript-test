import { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '../contexts/auth';
import { Container } from '../components';
import request from '../request'

const ListPage = () => {
  const auth = useAuth();
  const [games, setGames] = useState([])

  useEffect(() => {
    request({
      method: 'get',
      url: '/games'
    })
    .then(({data}) => {
      setGames(data)
    })
    .catch(err => {
      console.log(err)
    });
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
            {games.map(game => (
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

export default ListPage
