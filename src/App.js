import { agenciaContext } from "./context/agenciaContext";
import { Agencia } from "./components/Agencia";

function App() {
  const initialState = {
    marca:'Chevrolet  ',
    modelo:'Silverado',
    agencia:'Boons puebla'
  }
  return (
    <agenciaContext.Provider
      value={initialState}
    >
      <div className="App">
        <h1 className='titulo'>Usando Contextos</h1>
        <Agencia/>
      </div>
    </agenciaContext.Provider>
  );
}

export default App;
