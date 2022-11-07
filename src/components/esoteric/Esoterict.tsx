
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import './esoterict.css';


const Esoterict : React.FC = () => {

    const { user, sendVote } = useContext(AuthContext)

    // TODO hacer un use effect para traerte las cartas si

  return (
    <div className="container">
        <h1>aqui va la lista de las cartas para votar</h1>
        <h1>incluir boton de logout</h1>
    </div>
  );
};

export default Esoterict;