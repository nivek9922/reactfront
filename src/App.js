import './App.css';
import CreateCliente from './components/CreateCliente';
import ShowClientes from './components/ShowClientes';
import EditCliente from './components/EditCliente';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
/* import AuthUser from './components/AuthUser'; */


function App() {
  /* const {getToken} =AuthUser();
  if(!getToken()){
    return <Login />
  } */
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowClientes /> }/>
          <Route path='/create' element={ <CreateCliente /> }/>
          <Route path='/edit/:id' element={ <EditCliente /> }/>
          <Route path='/login' element={ <Login /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
