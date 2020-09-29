import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';
const AuthContext = createContext()

function AuthProvider({ children }) {
  const { pathname, events } = useRouter()
  const [user, setUser] = useState()

  async function getUser() {
    if (Cookies.get('token')) {
      setUser(Cookies.get('token').username)
    } else {
      setUser(null)
    }
  }

  useEffect(() => {
    getUser()
  }, [pathname])

  useEffect(() => {
    const handleRouteChange = url => {
      if (url !== '/login' && !user) {
        window.location.href = '/login'
      }
    }

    if (pathname === '/') {
      window.location.href = '/login'
    }

    if (pathname !== '/login' && user === null) {
      window.location.href = '/login'
    }

    // Monitor routes
    events.on('routeChangeStart', handleRouteChange)
    return () => {
      events.off('routeChangeStart', handleRouteChange)
    }
  }, [user])

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
