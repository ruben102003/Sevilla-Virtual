import React from 'react';
import { useParams } from 'react-router-dom';
import './ActividadDetalle.css';

const actividades = [
  { id: 1, titulo: 'Actividad 1', descripcion: 'Descripción de la Actividad 1', imagen: '/path/to/image1.jpg' },
  { id: 2, titulo: 'Actividad 2', descripcion: 'Descripción de la Actividad 2', imagen: '/path/to/image2.jpg' },
  { id: 3, titulo: 'Actividad 3', descripcion: 'Descripción de la Actividad 3', imagen: '/path/to/image3.jpg' },
  { id: 4, titulo: 'Actividad 4', descripcion: 'Descripción de la Actividad 4', imagen: '/path/to/image4.jpg' },
  { id: 5, titulo: 'Actividad 5', descripcion: 'Descripción de la Actividad 5', imagen: '/path/to/image5.jpg' },
  { id: 6, titulo: 'Actividad 6', descripcion: 'Descripción de la Actividad 6', imagen: '/path/to/image6.jpg' },
  { id: 7, titulo: 'Actividad 7', descripcion: 'Descripción de la Actividad 7', imagen: '/path/to/image7.jpg' },
  { id: 8, titulo: 'Actividad 8', descripcion: 'Descripción de la Actividad 8', imagen: '/path/to/image8.jpg' },
  { id: 9, titulo: 'Actividad 9', descripcion: 'Descripción de la Actividad 9', imagen: '/path/to/image9.jpg' },
  { id: 10, titulo: 'Actividad 10', descripcion: 'Descripción de la Actividad 10', imagen: '/path/to/image10.jpg' },
  { id: 11, titulo: 'Actividad 11', descripcion: 'Descripción de la Actividad 11', imagen: '/path/to/image11.jpg' },
  { id: 12, titulo: 'Actividad 12', descripcion: 'Descripción de la Actividad 12', imagen: '/path/to/image12.jpg' },
];

function ActividadDetalle() {
  const { id } = useParams();
  const actividad = actividades.find(act => act.id === parseInt(id));

  if (!actividad) {
    return <div>Actividad no encontrada</div>;
  }

  return (
    <div className="actividad-detalle">
      <h1>{actividad.titulo}</h1>
      <img src={actividad.imagen} alt={actividad.titulo} />
      <p>{actividad.descripcion}</p>
    </div>
  );
}

export default ActividadDetalle;
