import { IonPage } from '@ionic/react';
import { useContext } from 'react';
import CardSend from '../components/cardSend/CardSend';
import Maldicio from '../components/maldicio/Maldicio';
import { AuthContext } from '../contexts/auth';
import './Tab2.css';

const Tab2: React.FC = () => {
  const { user } = useContext(AuthContext);
  return (
    <IonPage>
      {
        user?.isTarotCardSend 
          ? <CardSend/>
          : <Maldicio/>

      }
    </IonPage>
  );
};

export default Tab2;
