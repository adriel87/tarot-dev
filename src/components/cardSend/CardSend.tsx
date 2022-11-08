
import { IonLabel } from '@ionic/react';
import './cardSend.css';


const CardSend : React.FC = () => {
  return (
    <div className="container">

        <IonLabel className='text-label'>
            Ya has enviado tu carta
        </IonLabel>        

        <IonLabel className='text-label icon-label'>
            🤔
        </IonLabel>

        <IonLabel className='text-label'>
            vete a esoteric
        </IonLabel>

    </div>
  );
};

export default CardSend;