import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";


const endpoint = 'http://localhost:8000/api/cliente/';


const EditCliente = () => {
    const [nombres, setNombres] = useState('');
    const [cedula, setCedula] = useState('');
    const [celular, setCelular] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
        nombres: nombres,
        cedula: cedula, 
        celular: celular, 
        direccion: direccion, 
        ciudad: ciudad
        })
        navigate('/');
    }

    useEffect( () => {
        const getClienteById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setNombres(response.data.nombres)
            setCedula(response.data.cedula)
            setCelular(response.data.celular)
            setDireccion(response.data.direccion)
            setCiudad(response.data.ciudad)
        }
        getClienteById();
    }, [] );


  return (
    <div className='container card'>
         <div className='card-header mb-4'>
      <h3>Editar Cliente</h3>
      </div>
      <div className='card-body'>
      <form onSubmit={update}>
        <div className='mb-3'>
          <label className='form-label'>Nombres</label>
          <input 
              value={nombres}
              onChange={ (e)=> setNombres(e.target.value)}
              type='text'
              className='form-control' 
          />
          <label className='form-label'>Cedula</label>
          <input 
              value={cedula}
              onChange={ (e)=> setCedula(e.target.value)}
              type='text'
              className='form-control' 
          />
          <label className='form-label'>Celular</label>
          <input 
              value={celular}
              onChange={ (e)=> setCelular(e.target.value)}
              type='text'
              className='form-control' 
          />
          <label className='form-label'>Dirección</label>
          <input 
              value={direccion}
              onChange={ (e)=> setDireccion(e.target.value)}
              type='text'
              className='form-control' 
          />
          <label className='form-label'>Ciudad</label>
          <input 
              value={ciudad}
              onChange={ (e)=> setCiudad(e.target.value)}
              type='text'
              className='form-control' 
          />
        </div>
        <div className='mt-3'>
            <button type='submit' className='btn btn-primary'>Editar cliente</button>
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

export default EditCliente