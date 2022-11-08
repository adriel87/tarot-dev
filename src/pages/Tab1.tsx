import { IonPage } from '@ionic/react';

import TellFortune from '../components/tellFortune/TellFortune';
import './Tab1.css';

const Tab1: React.FC = () => {

  return (
    <IonPage>
        <TellFortune/>
    </IonPage>
  );
};

export default Tab1;
