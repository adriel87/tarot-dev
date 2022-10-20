
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonLabel, IonList, IonText } from '@ionic/react';
import { Camera, CameraResultType, Photo } from '@capacitor/camera'
import './maldicio.css';
import { useState } from 'react';
import { image } from 'ionicons/icons';
import { tarotCard as TC } from '../../interfaces';


const tarotCard : TC={
    name:'la carta',
    description:'es de noche',
    invertedDescription:'es de dia',
    url:'',
    deploy:{
        normal:'nada',
        inverted:'nada1'
    },
    love:{
        normal:'nada',
        inverted:'nada1'
    },
    luck:{
        normal:'nada',
        inverted:'nada1'
    },
    
} 

const Maldicio : React.FC = () => {

    const [cameraPhoto, setCameraPhoto] = useState<Photo>()

    const takePicture =async () => {
        try {
            const image = await Camera.getPhoto({
                quality:90,
                allowEditing:true,
                resultType: CameraResultType.Uri
            })
            
            setCameraPhoto(image)
        } catch (error) {
            console.log(error);
            
        }

    }

    


  return (
  <>
  
        <IonCard>
            <IonCardHeader>
                <IonCardTitle className='title-maldicio'>Crea tu Carta</IonCardTitle>
            </IonCardHeader>
            <IonCardContent className='ctn-maldicio'>
                <div className='text-maldicio'>
                    Elige Algo de tu entorno
                </div> 
                <IonButton className='btn-maldicion' onClick={takePicture}>🔎</IonButton>
            </IonCardContent>

    
            <IonList lines="none">
                <IonItem className='item-maldicio'>
                    <IonInput className='input-maldicio' color="primary" placeholder="El nombre de la carta"></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput color="success" placeholder="descripcion"></IonInput>
                </IonItem>
                <IonItem className='item-maldicio'>
                    <IonInput color="primary" placeholder="y su invertida"></IonInput>
                </IonItem>
            </IonList>


        </IonCard>


  </>
  );
};

export default Maldicio;