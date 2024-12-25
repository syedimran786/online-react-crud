import React, { createContext, useState } from 'react';

let AuthContext=createContext()

function AuthProvider({children}) {
let [user,setuser]=useState(null)
 
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
