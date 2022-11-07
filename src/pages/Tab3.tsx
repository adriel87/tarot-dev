import { IonPage, IonText } from '@ionic/react';
import Esoterict from '../components/esoteric/Esoterict';
import './Tab3.css';

const Tab3: React.FC = () => {

  // const [test, setTest] = useState<any|null>(null)
  // const setData = async ()=>  setTest(await Get('https://pokeapi.co/api/v2/pokemon/ditto'))

  return (
    <IonPage>
      <Esoterict/>
    </IonPage>
  );
};

export default Tab3;
