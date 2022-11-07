
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle,  IonContent,  IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { Camera, CameraResultType, Photo } from '@capacitor/camera'
import './maldicio.css';
import { useContext, useEffect, useState } from 'react';
import { RequestOptions } from 'http';
import { Post } from '../../utils';
import { AuthContext } from '../../contexts/auth';





interface formTarotCard{
    name:'',
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
    const [showButton, setShowButton] = useState<boolean>(false)
    const { user, bearer, sendTarotCard } = useContext(AuthContext)

    
    useEffect(()=>{
        if (isValidForm()) {
            setShowButton(true)
        }
    },[tarotForm, cameraPhoto])

    const isValidForm = () :boolean =>{
        const { deploy,love,luck,name } = tarotForm

        if (!name) return false
           
        if (!love.normal ) return false
        if (!love.inverted) return false
        
        if (!luck.normal ) return false
        if (!luck.inverted) return false

        if (!deploy.normal ) return false
        if (!deploy.inverted) return false

        if (!cameraPhoto?.webPath) return false
        
        return true
    }

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
                        ...tarotForm.luck,
                        normal:value,
                    }
                })
                break;

            case 'iluck':
                setTarotForm({
                    ...tarotForm,
                    luck:{
                        ...tarotForm.luck,
                        inverted:value,
                    }
                })
                break;

            case 'deploy':
                setTarotForm({
                    ...tarotForm,
                    deploy:{
                        ...tarotForm.deploy,
                        normal:value,
                    }
                })
                break;

            case 'ideploy':
                setTarotForm({
                    ...tarotForm,
                    deploy:{
                        ...tarotForm.deploy,
                        inverted:value,
                    }
                })
                break;
                
                default:
                    break;
                    
                }
                
            }
            
    const handleSendNewCard = async () =>{
        const formdata = new FormData()
        const blobResponse = await fetch(cameraPhoto?.webPath as string)
        const photo = await blobResponse.blob()
        
        formdata.append('file', photo, user?.name )
        formdata.append('name', tarotForm.name)
        formdata.append('love', tarotForm.love.normal)
        formdata.append('ilove', tarotForm.love.inverted)
        formdata.append('luck', tarotForm.luck.normal)
        formdata.append('iluck', tarotForm.luck.inverted)
        formdata.append('deploy', tarotForm.deploy.normal)
        formdata.append('ideploy', tarotForm.deploy.inverted)
        formdata.append('createdAt', new Date().toString())
        formdata.append('userEmail', user?.name as string)


        const myHeaders = new Headers()
        myHeaders.append("Authorization", `Bearer ${bearer}`)
        

        const requestOptions = {
            body: formdata,
            headers: myHeaders
        }

        // TODO hacer metodo fetch en Utils
        //    const response = await fetch('http://localhost:7127/api/tarotCard', requestOptions)
            
        const response = await Post('http://localhost:7127/api/tarotCard', requestOptions);


        if (response.status === 200) {
            sendTarotCard()
        }
           
           
        
        // 
    }

    const prepareCardToSend = () => {
        
        const formdata = new FormData()

        // const tarotCardBlob = new Blob([JSON.stringify(tarotForm)])
        formdata.append('file', cameraPhoto?.webPath as string , tarotForm.name )

        formdata.append('name', tarotForm.name)
        formdata.append('love', tarotForm.love.normal)
        formdata.append('ilove', tarotForm.love.inverted)
        formdata.append('luck', tarotForm.luck.normal)
        formdata.append('iluck', tarotForm.luck.inverted)
        formdata.append('deploy', tarotForm.deploy.normal)
        formdata.append('ideploy', tarotForm.deploy.inverted)
        
        return formdata;
    }
    
  return (
  <>
  <IonContent color="dark">
        <IonCard>
            <IonCardHeader>
                <IonCardTitle className='title-maldicio'>Crea tu Carta</IonCardTitle>
            </IonCardHeader>
            <IonCardContent className='ctn-maldicio'>
                <div className='text-maldicio'>
                    
                    {
                        cameraPhoto?.webPath 
                            ? <span>🌚 📸 🌝</span>
                            : <h3>Elige Algo de tu entorno</h3>
                    }   
                </div> 
                <IonButton className={`btn-maldicion ${cameraPhoto?.webPath && 'ocultist'}`} onClick={takePicture}>🔎</IonButton>
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
  </IonContent>
        <IonButton onClick={handleSendNewCard} className='btn-send-maldicio' disabled={!showButton} expand='full'>😈Enviemos tu carta😈</IonButton>
        
  </>
  );
};

export default Maldicio;


