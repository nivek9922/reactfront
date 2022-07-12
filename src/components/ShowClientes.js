import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './styles/show-clientes.css';

const endpoint = 'http://localhost:8000/api';

const ShowClientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect( () => {
        getAllClientes();
    }, [])

    const getAllClientes = async () => {
       const response = await axios.get(`${endpoint}/clientes`);
       setClientes(response.data);
    }

    const deleteCliente = async (id) => {
        await axios.delete(`${endpoint}/cliente/${id}`);
        getAllClientes();
    }
    

  return (
      <div className='container card'>
          <div className='card-header'>
              <h1>Listado de clientes</h1>
          </div>
          <div>
              <Link to="/create" className='btn btn-success mt-2 mb-2'>
                  Agregar cliente
              </Link>
          </div>
          <div>
              <Link to="/login" className='btn btn-primary mt-2 mb-2'>
                  Login
              </Link>
          </div>



          <div className='flex-row card-body'>
              <table className='table table-striped'>
                  <thead>
                      <tr>
                          <th>Nombres</th>
                          <th>Cedula</th>
                          <th>Celular</th>
                          <th>Dirección</th>
                          <th>Ciudad</th>
                          <th>Acción</th>
                      </tr>
                  </thead>
                  <tbody>
                      {clientes.map((cliente) => (
                          <tr key={cliente.id}>
                              <td>{cliente.nombres}</td>
                              <td>{cliente.cedula}</td>
                              <td>{cliente.celular}</td>
                              <td>{cliente.direccion}</td>
                              <td>{cliente.ciudad}</td>
                              <td>

                                  <Link to={`/edit/${cliente.id}`} className='btn btn-warning'>
                                      Editar
                                  </Link>
                                  {"  "}
                                  <button onClick={() => deleteCliente(cliente.id)} className='btn btn-danger'>
                                      Eliminar
                                  </button>

                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
  )
}

export default ShowClientes;