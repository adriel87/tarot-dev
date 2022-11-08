import { FC, useContext, useEffect, useReducer } from 'react'

// TODO agregar un servicio que llame a la api

import { tarotCard } from '../../interfaces'
import { Get } from '../../utils'
import { AuthContext } from '../auth'

import { TarotCardContext, tarotCardReducer } from './'

export interface TarotCardsState{
    tarotDeck : tarotCard[],
    tarotCardsToVote : tarotCard[]

}

const TAROT_CARD_INITIAL_STATE : TarotCardsState = {
    tarotDeck: [],
    tarotCardsToVote: []
}

interface Props {
    children : JSX.Element
}

export const TarotCardProvider : FC<Props> = ({children}) =>{

    const { bearer } = useContext(AuthContext)
    const [state, dispatch] = useReducer(tarotCardReducer, TAROT_CARD_INITIAL_STATE)
    
    const headers = new Headers()
    headers.append('Authorization',`Bearer ${bearer}`)

    
    // useEffect(()=>{
    //     initCards()
    // },[])
    
    const initCards = async () =>{
        
        console.log('deck');
        // TODO get data from backend
        const card =await getTarotDeck()
        const cardu = await getTarotDeck()
        console.log(card);
        
       dispatch({type:'Tarot Card - Init Deck', payload: card})
       dispatch({type:'Tarot Card - Init Cards to vote', payload: cardu})

    }


    const getTarotDeck = async () =>{
        
        const deck =  await Get('http://localhost:7127/api/tarotCard/takeFromDeck', headers)
        
        return deck;
    }

    // TODO create endpoint for cardsToVote
    // const getTarotCardsToVote = async () =>{
    //     const cards =  await Get('http://localhost:7127/api/tarotCard/takeFromDeck', headers)
    //     return cards;
    // }

    return (
        <TarotCardContext.Provider value={{
            ...state,
            initCards,
        }}>
            { children }
        </TarotCardContext.Provider>
    )
}