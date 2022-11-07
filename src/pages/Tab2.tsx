import { IonPage } from '@ionic/react';
import { useContext } from 'react';
import Maldicio from '../components/maldicio/Maldicio';
import TarotCard from '../components/tarotCard/TarotCard';
import { AuthContext } from '../contexts/auth';
import './Tab2.css';

const Tab2: React.FC = () => {
  const { user } = useContext(AuthContext);
  return (
    <IonPage>
      {
        user?.isTarotCardSend 
          ? <h1> Ya has enviado tu carta </h1>
          : <Maldicio/>

      }
    </IonPage>
  );
};

export default Tab2;
