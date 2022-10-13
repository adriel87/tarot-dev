
import './tarotCardList.css';
import { IonList } from '@ionic/react';
import TarotCard from '../tarotCard/TarotCard';
import { useContext } from 'react';
import { TarotCardContext } from '../../contexts/tarotCard';
import { getThreeRandomNumberArray } from '../../utils';
import { fortuneTypes } from '../../enums';


const TarotCardList : React.FC = () => {

const { tarotCards } = useContext(TarotCardContext)

const randomCards = getThreeRandomNumberArray(tarotCards.length)


  return (
    <IonList>
        {
          randomCards.map((card, index)=> <TarotCard  tarotCard={tarotCards[card]} type={fortuneTypes[index]} key={index}/>)
        }
    </IonList>
  );
};

export default TarotCardList;