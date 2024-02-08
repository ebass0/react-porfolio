import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import './Contatos.css';


const Contatos = () => {
    return (
        <ul className='list'>
            <li>
                <a href='https://github.com/ebass0' >
                    <FontAwesomeIcon icon={faGithub} className='list-link' />
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/estevao-basso/'  >
                    <FontAwesomeIcon icon={faLinkedin} className='list-link' />
                </a>
            </li>
            <li>
                <a href='/'>
                    <FontAwesomeIcon icon={faInstagram} className='list-link' />
                </a>
            </li>
            <li>
                <a href='/' >
                    <FontAwesomeIcon icon={faMicrosoft} className='list-link' />
                </a>
            </li>
        </ul>
    );
}

export default Contatos;