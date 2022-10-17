
import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonImg, IonItem } from '@ionic/react';
import { tarotCard } from '../../interfaces';
import './tarotCard.css';

interface Props {
  tarotCard: tarotCard,
  type: string
}

const TarotCard : React.FC<Props> = ({tarotCard,type}) => {
  const isInverted = Math.random() > 0.5
  let description = '' 
  switch (type) {
    case 'love':
      description = isInverted ? tarotCard[type].inverted : tarotCard[type]?.normal
      break;
    case 'luck':
      description = isInverted ? tarotCard[type].inverted : tarotCard[type]?.normal
      break;
    case 'deploy':
      description = isInverted ? tarotCard[type].inverted : tarotCard[type]?.normal
      break
    default:
      break;
  }
  const defaultURL = 'https://res.cloudinary.com/dctd9sqdg/image/upload/v1665591890/evil-pc_ke0pny.png'
  return (
    <IonAccordionGroup expand="inset">
      <IonAccordion value='first'>
        <IonItem slot="header"  color="dark">
          <IonCard button className='card'>
              <IonCardHeader>
                  <IonCardSubtitle>
                      {type}
                  </IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                  <IonImg src={ tarotCard?.url } className={isInverted ? 'image-inverted': ''}/>
              </IonCardContent>
          </IonCard>
        </IonItem>
        <div className='ion-padding' slot='content'>
          <h2 className='h2-card'>{ tarotCard?.name}</h2>
          <p className='p-card'>{ description }</p>
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
};

export default TarotCard;