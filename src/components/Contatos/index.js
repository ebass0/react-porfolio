import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Contatos.css';


const Contatos = () => {
    return (
        <ul className='list'>
            <li>
                <a href='https://github.com/ebass0' target='_blank' rel='noreferrer' >
                    <FontAwesomeIcon icon={faGithub} className='list-link' />
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/estevao-basso/' target='_blank' rel='noreferrer'  >
                    <FontAwesomeIcon icon={faLinkedin} className='list-link' />
                </a>
            </li>
            <li>
                <a href='/' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faInstagram} className='list-link' />
                </a>
            </li>
            <li>
                <a href="/" target='_blank' rel='noreferrer' >
                    <FontAwesomeIcon icon={faXTwitter} className='list-link' />
                </a>
            </li>
        </ul>
    );
}

export default Contatos;