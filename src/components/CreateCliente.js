import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/cliente';

const CreateCliente = () => {
  const [nombres, setNombres] = useState('');
  const [cedula, setCedula] = useState('');
  const [celular, setCelular] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudad, setCiudad] = useState('');
  const navigate = useNavigate();


  const store = async (e) => {
    e.preventDefault()
    await axios.post(endpoint, 
      {
        nombres: nombres,
        cedula: cedula, 
        celular: celular, 
        direccion: direccion, 
        ciudad: ciudad
      })
         navigate('/');
  }


  return (
    <div className='container card'>
      <div className='card-header'>
        <h3>Crear Cliente</h3>
      </div>
      <div className='card-body'>
        <form onSubmit={store} className='mt-3'>

          <label className='form-label'>Nombres</label>
          <input
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            type='text'
            className='form-control'
          />
          <label className='form-label'>Cedula</label>
          <input
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            type='text'
            className='form-control'
          />
          <label className='form-label'>Celular</label>
          <input
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            type='text'
            className='form-control'
          />
          <label className='form-label'>Dirección</label>
          <input
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            type='text'
            className='form-control'
          />
          <label className='form-label'>Ciudad</label>
          <input
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            type='text'
            className='form-control'
          />
          
          <div className='mt-3'>
            <button type='submit' className='btn btn-primary'>Crear cliente</button>
            {"  "}
            <Link to="/" className='btn btn-danger'>
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateCliente;