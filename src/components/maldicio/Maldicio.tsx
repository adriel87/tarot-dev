
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonLabel, IonList, IonText } from '@ionic/react';
import { Camera, CameraResultType, Photo } from '@capacitor/camera'
import './maldicio.css';
import { useState } from 'react';
import { image } from 'ionicons/icons';
import { tarotCard } from '../../interfaces';




interface formTarotCard{
    name:'',
    description:'',
    invertedDescription:'',
    deploy:{
        normal:'',
        inverted:''
    },
    love:{
        normal:'',
        inverted:''
    },
    luck:{
        normal:'',
        inverted:''
    },
}

const initState : formTarotCard={
    name:'',
    description:'',
    invertedDescription:'',
    deploy:{
        normal:'',
        inverted:''
    },
    love:{
        normal:'',
        inverted:''
    },
    luck:{
        normal:'',
        inverted:''
    },
    
} 

const Maldicio : React.FC = () => {

    const [cameraPhoto, setCameraPhoto] = useState<Photo>()
    const [tarotForm, setTarotForm] = useState<formTarotCard>(initState)

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

    const handleChange = (e: any) : void =>{
        e.preventDefault()
        const { id, value } = e.target 
        switch (id) {
            case 'name':
                setTarotForm({
                    ...tarotForm,
                    [id]:value
                })
                break;

            case 'description':
            setTarotForm({
                ...tarotForm,
                [id]:value
            })
                break;

            case 'invertedDescription':
            setTarotForm({
                ...tarotForm,
                [id]:value
            })
                break;

            case 'love':
                setTarotForm({
                    ...tarotForm,
                    love:{
                        ...tarotForm.love,
                        normal:value,
                    }
                })
                break;

            case 'ilove':
                setTarotForm({
                    ...tarotForm,
                    love:{
                        ...tarotForm.love,
                        inverted:value,
                    }
                })
                break;

            case 'luck':
                setTarotForm({
                    ...tarotForm,
                    luck:{
                        ...tarotForm.love,
                        normal:value,
                    }
                })
                break;

            case 'iluck':
                setTarotForm({
                    ...tarotForm,
                    luck:{
                        ...tarotForm.love,
                        inverted:value,
                    }
                })
                break;

            case 'deploy':
                setTarotForm({
                    ...tarotForm,
                    deploy:{
                        ...tarotForm.love,
                        normal:value,
                    }
                })
                break;

            case 'ideploy':
                setTarotForm({
                    ...tarotForm,
                    deploy:{
                        ...tarotForm.love,
                        inverted:value,
                    }
                })
                break;

            default:
                break;

        }
        
    }
    
    const handleSendNewCard = async () =>{
        // TODO send new card to back

        // 
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
                
                <IonItem color='vayaShit' className='item-maldicio' button>
                    <IonLabel className='label-maldicio' position='floating' color='primary'>
                        <span className='label-maldicio'>name</span>
                    </IonLabel>
                    <IonInput 
                        id='name' 
                        onIonChange={(e)=>handleChange(e)} 
                        className='input-maldicio' 
                        color="primary"
                        ></IonInput>
                </IonItem>
                <IonItem color='vayaShit'>
                    <IonLabel className='label-maldicio' position='floating' color='success'>
                        <span className='label-maldicio '>description</span>
                    </IonLabel>
                    <IonInput 
                        id='description'
                        onIonChange={(e)=>handleChange(e)} 
                        color="success"
                        ></IonInput>
                </IonItem>
                <IonItem color='vayaShit' className='item-maldicio'>
                    <IonLabel className='label-maldicio' position='floating' color='primary'>
                        <span className='label-maldicio'>inverted description</span>
                    </IonLabel>
                    <IonInput 
                        id='invertedDescription'
                        onIonChange={(e)=>handleChange(e)} 
                        className='input-maldicio' 
                        color="primary" 
                        value={tarotForm.invertedDescription}
                        ></IonInput>
                </IonItem>
                <IonItem color='vayaShit'>
                    <IonLabel className='label-maldicio' position='floating' color='success'>
                        <span className='label-maldicio'>love</span>
                    </IonLabel>
                    <IonInput
                        id='love' 
                        onIonChange={(e)=>handleChange(e)} 
                        color="success" 
                        ></IonInput>
                </IonItem>
                <IonItem color='vayaShit' className='item-maldicio'>
                    <IonLabel className='label-maldicio' position='floating' color='primary'>
                        <span className='label-maldicio'>inverted love</span>
                    </IonLabel>
                    <IonInput
                        id='ilove' 
                        onIonChange={(e)=>handleChange(e)} 
                        className='input-maldicio' 
                        color="primary" 
                        ></IonInput>
                </IonItem>
                <IonItem color='vayaShit'>
                    <IonLabel className='label-maldicio' position='floating' color='success'>
                        <span className='label-maldicio'>luck</span>
                    </IonLabel>
                    <IonInput
                        id='luck' 
                        onIonChange={(e)=>handleChange(e)} 
                        color="success" 
                        ></IonInput>
                </IonItem>
                <IonItem color='vayaShit' className='item-maldicio'>
                    <IonLabel className='label-maldicio' position='floating' color='primary'>
                        <span className='label-maldicio'>inverted luck</span>
                    </IonLabel>
                    <IonInput
                        id='iluck' 
                        onIonChange={(e)=>handleChange(e)} 
                        className='input-maldicio' 
                        color="primary" 
                        ></IonInput>
                </IonItem>
                <IonItem color='vayaShit'>
                    <IonLabel className='label-maldicio' position='floating' color='success'>
                        <span className='label-maldicio'>deploy</span>
                    </IonLabel>
                    <IonInput 
                        id='deploy'
                        onIonChange={(e)=>handleChange(e)} 
                        color="success" 
                        ></IonInput>
                </IonItem>
                <IonItem color='vayaShit' className='item-maldicio'>
                    <IonLabel className='label-maldicio' position='floating' color='primary'>
                        <span className='label-maldicio'>inverted deploy</span>
                    </IonLabel>
                    <IonInput
                        id='ideploy' 
                        onIonChange={(e)=>handleChange(e)} 
                        className='input-maldicio' 
                        color="primary" 
                        ></IonInput>
                </IonItem>
            </IonList>
        </IonCard>
  </>
  );
};

export default Maldicio;