

import { IonButton, IonCard, IonContent, IonIcon, IonInput } from '@ionic/react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { eye, star } from 'ionicons/icons'
import './login.css';


const Login : React.FC = () => {


    const { login } = useContext(AuthContext)

    

  return (
    <IonCard className='login-ctn'>
        <div className="input-ctn">
            <IonInput className='login-input' placeholder='Tu usuario...' autofocus inputMode='text'></IonInput>
            <IonInput className='login-input' placeholder='...y contraseña' type='password'></IonInput>
        </div>
        <IonButton className='login-btn' onClick={login}>
            <IonIcon className='login-icon' icon={eye}/>
        </IonButton>
    </IonCard>
  );
};

export default Login;