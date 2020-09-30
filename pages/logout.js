import { useEffect } from "react"
import { connect } from 'react-redux';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { logout } from '../actions';

const Logout = ({ dispatch, session }) => {
  const router = useRouter();

  useEffect(() => {
    dispatch(logout(session.player && session.player.username));
    router.push('/login');
  }, [])
  
  return <Head><title>Logout</title></Head>
}

const mapStateToProps = (state) => {
  let { session } = state;
  return { session }
}

export default connect(mapStateToProps)(Logout)
