import ExperienceList from '../ExperienceList';
import './ProjetosItens.css';

const ProjetosItens = () => {
    return (
        <ul className='Container'>
            <li>
                <div className='Projetos'>
                    <a className='Projetos-container' href='/' target='_blank' rel='noreferrer'>
                        <div className='Projetos-header'>
                            <img src='../../../assets/alurabooks.png' alt='Alurabooks project image'></img>
                        </div>
                        <div className='Projetos-title'>
                            <div>
                                <h3>
                                    AluraBooks
                                </h3>
                            </div>
                            <div className='Projetos-text'>
                                <p>
                                    Alura Books is a streamlined e-book sales platform crafted with React on the front end and Node.js using Express on the back end. Users can effortlessly search for books, add favorites, and remove items from their list. With its intuitive features, Alura Books offers a user-friendly solution for e-book enthusiasts.
                                </p>
                            </div>
                            <div className='Projetos-linguagens'>
                                <ul className='linguagens-list'>
                                    <ExperienceList item="HTML" />
                                    <ExperienceList item="CSS" />
                                    <ExperienceList item="JavaScript" />
                                    <ExperienceList item="React" />
                                    <ExperienceList item="Express" />
                                    <ExperienceList item="styled-components" />
                                </ul>
                            </div>
                        </div>
                    </a>
                </div>
            </li>

            <li>
                <div className='Projetos'>
                    <a className='Projetos-container' href='/' target='_blank' rel='noreferrer'>
                        <div className='Projetos-header'>
                            <img src='../../../assets/clone-netflix.png' alt='Netflix clone image'></img>
                        </div>
                        <div className='Projetos-title'>
                            <div>
                                <h3>
                                    Netflix Clone
                                </h3>
                            </div>
                            <div className='Projetos-text'>
                                <p>
                                    This Netflix homepage clone, built with HTML and CSS, was developed independently during the "7 Days Of Code | Alura" challenge. The project involved creating different sections of the page each day, following a design provided via Figma.
                                </p>
                            </div>
                            <div className='Projetos-linguagens'>
                                <ul className='linguagens-list'>
                                    <ExperienceList item="HTML" />
                                    <ExperienceList item="CSS" />
                                    <ExperienceList item="Figma" />
                                </ul>
                            </div>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    );
}

export default ProjetosItens;