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

    const login = (email: string)=>{
        console.log(email);
        dispatch({type:'Auth - login', payload:{name:email, role:'user'}})
    }

    const setBearer = (bearer: string)=>{
        dispatch({type:'Auth - Set Bearer', payload : bearer})
    }
    return (
        <AuthContext.Provider value={
            {
                ...state,
                login,
                setBearer
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}

