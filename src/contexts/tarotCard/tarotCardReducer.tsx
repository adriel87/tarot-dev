
import { tarotCard } from "../../interfaces";
import { TarotCardsState } from "./TarotCardProvider";

type tarotCardType = {type: 'Tarot Card - Init Cards', payload: tarotCard[]}

export const tarotCardReducer = (state: TarotCardsState, {type,payload}: tarotCardType ): TarotCardsState =>{
    switch (type) {
        case "Tarot Card - Init Cards":
            
            return {
                ...state,
                tarotCards : [...payload]
            }
    
        default:
            return state;
    }
}