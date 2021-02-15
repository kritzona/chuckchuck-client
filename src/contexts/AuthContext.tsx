import React from 'react'

const AuthContext = React.createContext({
  refreshContacts: () => {},
})

export default AuthContext
