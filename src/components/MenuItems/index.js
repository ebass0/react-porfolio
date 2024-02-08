import './MenuItems.css';

const MenuItems = (props) => {
    return (
        <li className='links-items'>
            <a href='/' className='items-link'>
                <span>{props.item}</span>
            </a>
        </li>
    );
}

export default MenuItems;