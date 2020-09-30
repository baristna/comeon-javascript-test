import { useEffect } from "react"
import Cookies from 'js-cookie';
import request from '../request';

const Logout = () => {
  useEffect(() => {
    request({
      method: 'post',
      url: '/logout'
    })
    .then(() => {
      Cookies.remove('token');
      window.location.href = '/login';
    })
    .catch(err => {
      console.log(err)
      Cookies.remove('token');
      window.location.href = '/login';
    });
  }, [])
  
  return null
}

export default Logout
