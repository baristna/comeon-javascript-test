import Head from 'next/head'
import { useAuth } from '../contexts/auth';
import { Container } from '../components';

const ListPage = () => {
  const auth = useAuth();

  console.log(auth)
  return (
    <div className="container">
      <Head>
        <title>Games</title>
      </Head>
      <Container>
        <img src={`/avatar/${auth && auth.username}.jpg`} />
        {auth.name} {auth.event}
        <hr />
        <h3>Games</h3>
        <hr />
        asdsd
      </Container>
    </div>
  )
}

export default ListPage
