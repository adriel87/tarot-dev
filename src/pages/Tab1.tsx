import { IonPage, IonContent } from '@ionic/react';

import TellFortune from '../components/tellFortune/TellFortune';
import './Tab1.css';

const Tab1: React.FC = () => {

  


  return (
    <IonPage>
      {/* <IonContent> */}
        <TellFortune/>
      {/* </IonContent> */}
    </IonPage>
  );
};

export default Tab1;
