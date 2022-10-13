
import { User } from '../../interfaces';
import { AuthState } from './AuthProvider'

type authTypes = 
    | {type: 'Auth - login', payload: User}
    | {type: 'Auth - logout'}

export const authReducer = (state: AuthState, action: authTypes):AuthState =>{
    switch(action.type){
        case 'Auth - login':
            return{
                isLogged:true,
                user: action.payload
            }
        case 'Auth - logout':
            return{
                isLogged:false,
                user: undefined
            }
    }
}