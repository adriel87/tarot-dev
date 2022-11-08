
import './tarotCardList.css';
import { IonList } from '@ionic/react';
import TarotCard from '../tarotCard/TarotCard';
import { useContext } from 'react';
import { TarotCardContext } from '../../contexts/tarotCard';
import { getThreeRandomNumberArray } from '../../utils';
import { fortuneTypes } from '../../enums';


const TarotCardList : React.FC = () => {

const { tarotDeck } = useContext(TarotCardContext)

const randomCards = getThreeRandomNumberArray(tarotDeck.length)


  return (
    <IonList>
        {
          randomCards.map((card, index)=> <TarotCard  tarotCard={tarotDeck[card]} type={fortuneTypes[index]} key={index}/>)
        }
    </IonList>
  );
};

export default TarotCardList;