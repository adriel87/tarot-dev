
import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonContent } from '@ionic/react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { TarotCardContext } from '../../contexts/tarotCard';
import TarotCard from '../tarotCard/TarotCard';
import './esoterict.css';


const Esoterict : React.FC = () => {

    const { user, sendVote, logout } = useContext(AuthContext)
    const { tarotCardsToVote } = useContext(TarotCardContext)

    // TODO hacer un use effect para traerte las cartas si

  return (
    <IonContent color={'dark'}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className='title-esoteric' color={'light'} >
          💜 Vota tu carta 💜
          </IonCardTitle>
        </IonCardHeader>
      </IonCard>
        {
          tarotCardsToVote.map(card=> <TarotCard tarotCard={card} key={card.name.toString()}/>)
        }
        <IonButton onClick={logout} color='danger' className={'btn-logout'}>pa fuera</IonButton>
    </IonContent>
  );
};

export default Esoterict;