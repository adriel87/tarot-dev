
import { Motion, RotationRate } from '@capacitor/motion'
import { IonText, IonButton, IonIcon } from '@ionic/react';
import { fingerPrint } from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';
import ShowFortune from '../showFortune/ShowFortune';
import './TellFortune.css';



const TellFortune : React.FC = () => {

    const [ isButtonPress, setIsButtonPress ] = useState(false)
    
    const [ orientation, setOrientation ] = useState<null| any>(null)

    useEffect(()=>{

      Motion.addListener('accel', event => {
        setOrientation({
          result: event.acceleration,
          rotatitionResult:event.rotationRate
        })
      })

      return () => { Motion.removeAllListeners() }

    },[])

  
    const permissionRequired = async ()=>{
    
      

    }

    return (
    
    <>
    {
      !isButtonPress
       ?    <div className="container">      
       <IonText>
         <div>
           <h1>😈 la suerte 😈</h1>
           <h1>😇 esta echada 😇</h1>
           <h2>solo pulsa el botón</h2>
           <h2>y transfiere tu alma</h2>
           <h2>{orientation?.rotatitionResult?.alpha ? orientation?.rotatitionResult?.alpha :" lakjds;"}1</h2>
           <h2>{orientation?.result?.x ? orientation?.result?.x :"cilo"  }2</h2>
         </div>
       </IonText>
       <IonButton 
          className='button' 
          onClick={()=>{setIsButtonPress(true)}}
           >
         <IonIcon className='icon' icon={fingerPrint}></IonIcon>
       </IonButton>
   </div>

        : <ShowFortune/>
      
    }
    </>



  );
};

export default TellFortune;