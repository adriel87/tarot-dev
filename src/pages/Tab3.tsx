import { IonButton, IonPage } from '@ionic/react';
import { useContext } from 'react';
import { TarotCardContext } from '../contexts/tarotCard';
import './Tab3.css';

const Tab3: React.FC = () => {

  const { initCards } = useContext(TarotCardContext)

  return (
    <IonPage>
      <IonButton onClick={ initCards }>
        pulsame
      </IonButton>
    </IonPage>
  );
};

export default Tab3;
