import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import './Resume.css';

const Resume = () => {
    return(
        <div className='Resume'>
            <a href='https://1drv.ms/b/s!AqOJvH6wx0OCmgV1rLopEVQjizSQ?e=kPlI4k' target='_blank' rel='noreferrer' className='Resume-link'>
                <span>
                    View Full <span>Resumé</span>
                    <FontAwesomeIcon icon={faSquareArrowUpRight} className='icon' />
                </span>
            </a>
        </div>
    );
}

export default Resume;