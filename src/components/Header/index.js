import Contatos from '../Contatos';
import MenuItems from '../MenuItems';
import './Header.css';

const Header = () => {
    return (
        <div className='main'>
            <header className='informations'>
                <div>
                    <h1 className='informations-title'><a href='/' className='title-link'>Estevão Basso</a></h1>
                    <h2 className='informations-subtitle'>Front-End Developer</h2>
                    <p className='informations-text'>Aspiring front-end developer with a keen eye for detail, I create immersive and user-friendly digital interfaces.</p>
                </div>
                <div>
                    <nav className='informations-links'>
                        <ul className='links-list'>
                            <MenuItems item='About' link='#' />
                            <MenuItems item='Experience' link='#experience' />
                            <MenuItems item='Projects' link='#projects' />
                        </ul>
                    </nav>
                </div>

                <div className='informations-social'>
                    <Contatos />
                </div>
            </header>
        </div>
    );
}

export default Header;