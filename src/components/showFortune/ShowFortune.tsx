
import { IonContent } from '@ionic/react';
import TarotCardList from '../tarorCardList/TarotCardList';
import './ShowFortune.css';


const ShowFortune : React.FC = () => {
  return (
    <IonContent>
      <TarotCardList />
    </IonContent>
  );
};

export default ShowFortune;