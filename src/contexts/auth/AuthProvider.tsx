import { FC, useReducer } from 'react';
import { User } from '../../interfaces';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';


export interface AuthState {
    isLogged : boolean,
    bearer: string,
    user : User | null
}

const AUTH_CARD_INITIAL_STATE : AuthState ={
    isLogged:false,
    bearer:'',
    user: null
}

interface Props {
    children : JSX.Element
}


export const AuthProvider : FC<Props> = ({children}) =>{
    
    const [state, dispatch] = useReducer( authReducer ,AUTH_CARD_INITIAL_STATE)

    const login = (user: any)=>{
        
        dispatch({type:'Auth - login', payload: user})
    }

    const setBearer = (bearer: string)=>{
        dispatch({type:'Auth - Set Bearer', payload : bearer})
    }

    const sendVote = ()=> dispatch({type:'Auth - Vote Card'})

    const sendTarotCard = () => dispatch({type: 'Auth - Send Card'})
    return (
        <AuthContext.Provider value={
            {
                ...state,
                login,
                setBearer,
                sendVote,
                sendTarotCard
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}

