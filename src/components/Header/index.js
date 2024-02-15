import Contatos from '../Contatos';
import MenuItems from '../MenuItems';
import './Header.css';

const Header = () => {
    return (
        <div className='main'>
            <header className='informations'>
                <div>
                    <h1 className='informations-title'><a href='/' className='title-link'>Estevão Basso</a></h1>
                    <h2 className='informations-subtitle'>Full Stack Developer</h2>
                    <p className='informations-text'>Aspiring full-stack developer with a keen eye for detail, I create immersive and user-friendly digital interfaces.</p>
                </div>
                <div>
                    <nav className='informations-links'>
                        <ul className='links-list'>
                            <MenuItems item='About' />
                            <MenuItems item='Experience' />
                            <MenuItems item='Projects' />
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