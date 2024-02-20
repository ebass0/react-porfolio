import About from '../About';
import Experience from '../Experience';
import Projetos from '../Projetos';
import Resume from '../Resume';
import './Informacoes.css';

const Informacoes = () => {
    return (
        <div className='container'>
            <About />
            <Experience />
            <Resume />
            <Projetos />
        </div>
    );
}

export default Informacoes;