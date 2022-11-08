import { IonButton, IonCard, IonIcon, IonInput, IonLabel, IonNote, IonSpinner } from '@ionic/react';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { eye, logoSnapchat } from 'ionicons/icons'
import './login.css';
interface UserCredential{
  email: string,
  password: string,
}

const Login : React.FC = () => {

    const [userCredential, setUserCredential] = useState<UserCredential>({
      email:'',
      password:''
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<boolean>(false)

    const { login, setBearer } = useContext(AuthContext)

    const handleForm = ({target}:any) =>{
      const {id, value} = target;

      setUserCredential({
        ...userCredential,
        [id]:value
      })
      
    }

    // TODO onClick login
    const handleLogin = async () =>{
        setIsLoading(true)
        
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const data = JSON.stringify({
          "email": userCredential.email,
          "password": userCredential.password
        })
        const response = await fetch('http://localhost:7127/api/security/login',{
          method:'POST',
          headers,
          body : data
        })
        console.log(response.status);
        

        if(response.status===200){
          const { Bearer , User} = await response.json()
          setBearer(Bearer)
          login(User)
        }else{
          setErrorMessage(true)
          
        }
        
        setIsLoading(false)
    }
    // TODO onclic signin
    const handleSignIn = async()=>{
      setIsLoading(true)
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const data = JSON.stringify({
          "email": userCredential.email,
          "password": userCredential.password
        })
        const response = await fetch('http://localhost:7127/api/security/signin',{
          method:'POST',
          headers,
          body : data
        })
        
        if(response.status!==201){
          setErrorMessage(true)
        }else{
          const { Bearer, User } = await response.json()
          setBearer(Bearer)
          login(User)
        }
        
        setIsLoading(false)
      
    }
    

  return (
    isLoading 
    ? <IonSpinner className='login-spinner' color={'primary'}/> 
    : <IonCard className='login-ctn'>
        <div className="input-ctn">
            <IonInput 
              className='login-input' 
              placeholder='Tu email...' 
              autofocus inputMode='text' 
              id='email' 
              value={userCredential?.email}
              onIonChange={handleForm}
            />
            <IonNote slot="helper">Enter a valid email</IonNote>
            <IonInput 
              className='login-input' 
              placeholder='...y contraseña' 
              type='password' 
              id='password' 
              value={userCredential?.password}
              onIonChange={handleForm}
              />
              <IonNote slot="helper">Enter a valid password</IonNote>
        </div>
        {
         errorMessage && 
         <IonLabel className='login-label login-error-msg' color={"danger"}>
            Algo va mal intentalo de nuevo
          </IonLabel>
        }
        <div>

          <IonButton className='login-btn' onClick={handleLogin}>
            <IonIcon className='login-icon' icon={eye}/>
            <IonLabel className='login-label'>Ya te conozco</IonLabel>
            <IonIcon className='login-icon' icon={eye}/>
          </IonButton>
          <IonButton color={'tertiary'} className='login-btn' onClick={handleSignIn}>
            <IonIcon className='login-icon' icon={logoSnapchat}/>
            <IonLabel className='login-label'>¿Eres Nuevo?</IonLabel>
            <IonIcon className='login-icon' icon={logoSnapchat}/>
          </IonButton>
        </div>
    </IonCard>
  );
};

export default Login;