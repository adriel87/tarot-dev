import { createContext } from 'react';
import { tarotCard } from '../../interfaces';




interface ContextProps{
    tarotCards: tarotCard[],
}

export const TarotCardContext = createContext({} as ContextProps)