import { Link } from 'react-router-dom';
import './aside.css';

function AsideComponent () {
        return(
      <aside>
          <ul className='listaHorizontal'>
            <li><Link to="/quero-adotar">Quero adotar</Link></li>
            <li><Link to="/quero-doar">Quero doar</Link></li>
            <li><Link to="/ser-apoiador">Ser apoiador</Link></li>
          </ul>
      </aside>  
        )
    }

export default AsideComponent;