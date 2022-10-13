
import { IonText, IonButton, IonIcon } from '@ionic/react';
import { fingerPrint } from 'ionicons/icons';
import { useRef, useState } from 'react';
import ShowFortune from '../showFortune/ShowFortune';
import './TellFortune.css';



const TellFortune : React.FC = () => {

    const [ isButtonPress, setIsButtonPress ] = useState(false)

    const intervalId = useRef<string | number | NodeJS.Timeout | undefined>()

    const iNeedFive = useRef(0)

    const handleOnMouseDown = () => {
        setIsButtonPress(true)
        intervalId.current = setInterval(()=>{
          iNeedFive.current++
        },1000)
    }


    const handleOnMouseUp = () => {
        setIsButtonPress(false)
        clearInterval(intervalId.current)
    }
    const handleOnMouseLeave = () => {
        if (isButtonPress) {
            setIsButtonPress(false)
            clearInterval(intervalId.current);
        }       
    }


    
  return (
    
    <>
    {
      iNeedFive.current <= 3
       ?    <div className="container">      
       <IonText>
         <div>
           <h1>😈 la suerte 😈</h1>
           <h1>😇 esta echada 😇</h1>
           <h2>solo pulsa el botón</h2>
           <h2>y transfiere tu alma</h2>
         </div>
       </IonText>
       <IonButton 
           className='button' 
           onMouseDown={handleOnMouseDown} 
           onMouseUp={handleOnMouseUp}
           onMouseLeave={handleOnMouseLeave}
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