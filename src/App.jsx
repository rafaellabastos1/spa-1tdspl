import Rodape from './components/Rodape';
import Lista from './components/Lista';
import { Outlet } from 'react-router-dom';

function App(){

  return(
    <>
      <Lista />
        <Outlet/>
      <Rodape />
    </>
  );
}

export default App