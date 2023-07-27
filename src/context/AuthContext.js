'use client'

import { createContext,useState,useEffect } from "react"
import AuthServices from '../services/AuthServices'


export const AuthContext = createContext()

export default ({children}) => {
      

    const [user,setUser] = useState(null)
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isLoaded,setIsLoaded] = useState(false)

    useEffect(() => {
        AuthServices.isAuthenticated().then(data => {
            setUser(data.user)
            setIsAuthenticated(data.isAuthenticated)
            setIsLoaded(true)
            
            AuthServices.isAdmin().then(data => {
                setIsAdmin(data.isAdmin)
            }
            )
        })
    },[])

    return (
        <div>
            {isLoaded ? <>
                <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated,isAdmin}}>
                    {children}
                </AuthContext.Provider>
            </> : <h1>Loading...</h1>}
         </div>
        )
}