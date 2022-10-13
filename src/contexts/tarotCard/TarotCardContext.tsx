import { createContext } from 'react';
import { tarotCard } from '../../interfaces';




interface ContextProps{
    // properties
    tarotCards: tarotCard[],

    // methods
    initCards: ()=>void,
}

export const TarotCardContext = createContext({} as ContextProps)