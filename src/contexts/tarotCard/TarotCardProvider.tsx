import { FC, useEffect, useReducer } from 'react'

// TODO agregar un servicio que llame a la api

import { tarotCard } from '../../interfaces'

import { TarotCardContext, tarotCardReducer } from './'

export interface TarotCardsState{
    tarotCards : tarotCard[]
}

const TAROT_CARD_INITIAL_STATE : TarotCardsState = {
    tarotCards: []
}

interface Props {
    children : JSX.Element
}

export const EntriesProvider : FC<Props> = ({children}) =>{

    const [state, dispatch] = useReducer(tarotCardReducer, TAROT_CARD_INITIAL_STATE)

    const getTarotCards = async () =>{
        // const { data } = 
    }

    return (
        <TarotCardContext.Provider value={{
            ...state,
        
        }}>
            { children }
        </TarotCardContext.Provider>
    )
}