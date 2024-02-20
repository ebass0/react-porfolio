import './App.css';
import Header from "./components/Header";
import Informacoes from './components/Informacoes';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Header />
      </div>
      <div className='App-informacoes'>
        <Informacoes />
        <Resume />
      </div>
    </div>
  );
}

export default App;
