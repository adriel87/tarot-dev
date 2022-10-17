import { FC, useReducer } from 'react';
import { User } from '../../interfaces';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';


export interface AuthState {
    isLogged : boolean,
    user : User | null
}

const AUTH_CARD_INITIAL_STATE : AuthState ={
    isLogged:false,
    user: null
}

interface Props {
    children : JSX.Element
}


export const AuthProvider : FC<Props> = ({children}) =>{
    
    const [state, dispatch] = useReducer( authReducer ,AUTH_CARD_INITIAL_STATE)

    const login= ()=>{
        dispatch({type:'Auth - login', payload:{name:'adriel', role:'user'}})
    }
    return (
        <AuthContext.Provider value={
            {
                ...state,
                login
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}

