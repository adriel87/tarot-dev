
import { User } from '../../interfaces';
import { AuthState } from './AuthProvider'

type authTypes = 
    | {type: 'Auth - login', payload: User}
    | {type: 'Auth - logout'}
    | {type: 'Auth - Set Bearer', payload: string}
    | {type: 'Auth - Send Card'}
    | {type: 'Auth - Vote Card'}

export const authReducer = (state: AuthState, action: authTypes):AuthState =>{
    switch(action.type){
        case 'Auth - login':
            console.log(action);
            
            return{
                ...state,
                isLogged:true,
                user: {...action.payload}
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
        case 'Auth - Send Card':
            return{
                ...state,
                user:{
                    ...state.user,
                    isTarotCardSend: true,
                }
            }
        case 'Auth - Vote Card':            
            return{
                ...state,
                user:{
                    ...state.user,
                    isVoted: true,
                }
            }
    }
}