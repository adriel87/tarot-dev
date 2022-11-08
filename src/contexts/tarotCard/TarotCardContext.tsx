import { createContext } from 'react';
import { tarotCard } from '../../interfaces';




interface ContextProps{
    // properties
    tarotDeck: tarotCard[],
    tarotCardsToVote: tarotCard[]

    // methods
    initCards: ()=>void,
}

const TarotCardContext = createContext({} as ContextProps)

// name for developer tools
TarotCardContext.displayName = 'TarotCardContext'

export {TarotCardContext}