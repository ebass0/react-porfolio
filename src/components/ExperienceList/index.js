import './ExperienceList.css';

const ExperienceList = (props) => {
    return (
        <li className='item'>
            <div className='item-text'>
                {props.item}
            </div>
        </li>
    );
}

export default ExperienceList;