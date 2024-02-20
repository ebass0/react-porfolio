import ProjetosItens from '../ProjetosItens';
import './Projetos.css';

const Projetos = () => {
    return (
        <section className='Projetos'>
            <div>
                <ul>
                    <ProjetosItens />
                </ul>
            </div>
        </section>
    );
}

export default Projetos;