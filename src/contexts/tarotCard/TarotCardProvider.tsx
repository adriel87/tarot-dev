import { FC, useEffect, useReducer } from 'react'

// TODO agregar un servicio que llame a la api

import { tarotCard } from '../../interfaces'

import { TarotCardContext, tarotCardReducer } from './'

export interface TarotCardsState{
    tarotCards : tarotCard[]
}

const TAROT_CARD_INITIAL_STATE : TarotCardsState = {
    tarotCards: [
        {
            name:'El PC del mal',
            description:'la verdad sobnrelasdflkjas;ldkfj;as',
            invertedDescription:'lo que pocos saben es que las cosa que ',
            love:{
                normal:'lovenorma1',
                inverted:'lovenorma1'
            },
            deploy:{
                normal:'deploy1',
                inverted:'deploy1'
            },
            luck:{
                normal:'luck1',
                inverted:'luck1'
            },
            url: 'https://res.cloudinary.com/dctd9sqdg/image/upload/v1665591890/evil-pc_ke0pny.png'
        },
        {
            name:'El PC del mal',
            description:'la verdad sobnrelasdflkjas;ldkfj;as',
            invertedDescription:'lo que pocos saben es que las cosa que ',
            love:{
                normal:'lovenorma2',
                inverted:'lovenorma2'
            },
            deploy:{
                normal:'deploy2',
                inverted:'deploy2'
            },
            luck:{
                normal:'luck2',
                inverted:'luck2'
            },
            url: 'https://res.cloudinary.com/dctd9sqdg/image/upload/v1665591890/evil-pc_ke0pny.png'
        },
        {
            name:'El PC del mal',
            description:'la verdad sobnrelasdflkjas;ldkfj;as',
            invertedDescription:'lo que pocos saben es que las cosa que ',
            love:{
                normal:'lovenorma3',
                inverted:'lovenorma3'
            },
            deploy:{
                normal:'deploy3',
                inverted:'deploy3'
            },
            luck:{
                normal:'luck4',
                inverted:'luck4'
            },
            url: 'https://res.cloudinary.com/dctd9sqdg/image/upload/v1665591890/evil-pc_ke0pny.png'
        },
        {
            name:'El PC del mal',
            description:'la verdad sobnrelasdflkjas;ldkfj;as',
            invertedDescription:'lo que pocos saben es que las cosa que ',
            love:{
                normal:'lovenorma5',
                inverted:'lovenorma5'
            },
            deploy:{
                normal:'deploy6',
                inverted:'deploy6'
            },
            luck:{
                normal:'luck6',
                inverted:'luck6'
            },
            url: 'https://res.cloudinary.com/dctd9sqdg/image/upload/v1665591890/evil-pc_ke0pny.png'
        }
    ]
}

interface Props {
    children : JSX.Element
}

export const TarotCardProvider : FC<Props> = ({children}) =>{

    const [state, dispatch] = useReducer(tarotCardReducer, TAROT_CARD_INITIAL_STATE)

    const getTarotCards = async () =>{
        // const { data } = 
    }

    const initCards = () =>{
        dispatch({type:'Tarot Card - Init Cards', payload:[{
            name:'sdfa',
            description:'lasjkhdkfhjad',
            invertedDescription:'ajkshdfjkahsdl',
            url: 'kja;ksdjfklahsdjkl',
            love:{
                normal:'noramlalala',
                inverted:'invertelalala'
            },
            deploy:{
                normal:'noramlalala',
                inverted:'invertelalala'
            },
            luck:{
                normal:'noramlalala',
                inverted:'invertelalala'
            }

        }]})
    }

    return (
        <TarotCardContext.Provider value={{
            ...state,
            initCards,
        }}>
            { children }
        </TarotCardContext.Provider>
    )
}