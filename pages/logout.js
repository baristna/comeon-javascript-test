import { useEffect } from "react"
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';
import request from '../request';

const Logout = (username) => {
  const router = useRouter();

  useEffect(() => {
    request({
      method: 'post',
      url: '/logout',
      data: { username }
    })
    .catch(err => {
      console.log(err)
    });

    Cookies.remove('token');
    router.push('/login');
  }, [])
  
  return null
}

export default Logout
