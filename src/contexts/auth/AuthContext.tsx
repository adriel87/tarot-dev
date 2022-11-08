import { createContext } from 'react'
import { User } from '../../interfaces'



interface ContextProps{
    // properties
    isLogged:boolean,
    user : User | null,
    bearer: string | null;

    // methods
    login : (response : any)=> void,
    logout : ()=> void,
    setBearer: (bearer :string)=> void,
    sendVote: ()=>void,
    sendTarotCard: () => void
}


const AuthContext = createContext({} as ContextProps)

AuthContext.displayName= 'AuthContext'

export {
    AuthContext,
}