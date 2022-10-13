import { createContext } from 'react'
import { User } from '../../interfaces'



interface ContextProps{
    // properties
    isLogged:boolean,
    user ?: User | null,

    // methods
    login : ()=> void,
}


const AuthContext = createContext({} as ContextProps)

AuthContext.displayName= 'AuthContext'

export {
    AuthContext,
}