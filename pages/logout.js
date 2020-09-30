import { useEffect } from "react"
import Cookies from 'js-cookie';

const Logout = () => {
  useEffect(() => {
    fetch(
      'http://localhost:3001/logout',
      {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: 'rebecka'
        })
      }
    );

    Cookies.remove('token');

    window.location.href = '/login';
  }, [])
  return null
}

export default Logout
