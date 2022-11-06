import { createContext } from 'react'
import { User } from '../../interfaces'



interface ContextProps{
    // properties
    isLogged:boolean,
    user : User | null,
    bearer: string | null;

    // methods
    login : (email : string)=> void,
    setBearer: (bearer :string)=> void
}


const AuthContext = createContext({} as ContextProps)

AuthContext.displayName= 'AuthContext'

export {
    AuthContext,
}