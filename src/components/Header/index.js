import Contatos from '../Contatos';
import MenuItems from '../MenuItems';
import './Header.css';

const Header = () => {
    return (
        <div className='main'>
            <header className='informations'>
                <div>
                    <h1 className='informations-title'><a href='/' className='title-link'>Estevao Basso</a></h1>
                    <h2 className='informations-subtitle'>Full Stack Developer</h2>
                    <p className='informations-text'>On a mission to become a full-stack developer, I'm constantly expanding my knowledge across various programming languages. My current focus is on JavaScript (ES6), HTML, CSS, React and Java. I bring a passion for creating engaging and accessible digital experiences, and I'm eager to translate my learning into real-world impact. Looking for opportunities to gain valuable experience and contribute to meaningful projects.</p>
                </div>
                <div>
                    <nav className='informations-links'>
                        <ul className='links-list'>
                            <MenuItems item='About' />
                            <MenuItems item='Experiences' />
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