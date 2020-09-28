import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
const AuthContext = createContext()

function AuthProvider({ children }) {
  const { pathname, events } = useRouter()
  const [user, setUser] = useState()

  async function getUser() {
    try {
      const response = await fetch(
        'http://localhost:3001/login',
        {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: 'rebeckas',
            password: 'secret'
          })
        }
      );
      const profile = await response.json()
      console.log(response)
      if (profile.error) {
        setUser(null)
      } else {
        setUser(profile)
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getUser()
  }, [pathname])

  useEffect(() => {
    // Check that a new route is OK
    const handleRouteChange = url => {
      if (url !== '/' && !user) {
        window.location.href = '/'
      }
    }

    // Check that initial route is OK
    if (pathname !== '/' && user === null) {
      window.location.href = '/'
    }

    // Monitor routes
    events.on('routeChangeStart', handleRouteChange)
    return () => {
      events.off('routeChangeStart', handleRouteChange)
    }
  }, [user])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
