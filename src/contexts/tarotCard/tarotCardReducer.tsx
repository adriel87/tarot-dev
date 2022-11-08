
import { tarotCard } from "../../interfaces";
import { TarotCardsState } from "./TarotCardProvider";

type tarotCardType = 
    | {type: 'Tarot Card - Init Deck', payload: tarotCard[]}
    | {type: 'Tarot Card - Init Cards to vote', payload: tarotCard[]}

export const tarotCardReducer = (state: TarotCardsState, {type,payload}: tarotCardType ): TarotCardsState =>{
    switch (type) {
        case "Tarot Card - Init Deck":
            
            return {
                ...state,
                tarotDeck : [...payload]
            }
        case "Tarot Card - Init Cards to vote":
            return{
                ...state,
                tarotCardsToVote : [...payload]
            }
        default:
            return state;
    }
}