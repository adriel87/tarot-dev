
import { User } from '../../interfaces';
import { AuthState } from './AuthProvider'

type authTypes = 
    | {type: 'Auth - login', payload: User}
    | {type: 'Auth - logout'}
    | {type: 'Auth - Set Bearer', payload: string}

export const authReducer = (state: AuthState, action: authTypes):AuthState =>{
    switch(action.type){
        case 'Auth - login':
            return{
                ...state,
                isLogged:true,
                user: action.payload
            }
        case 'Auth - logout':
            return{
                ...state,
                isLogged:false,
                user: null
            }
        case 'Auth - Set Bearer':
            return{
                ...state,
                bearer : action.payload
            }
    }
}