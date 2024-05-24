import React from 'react';
import { useParams } from 'react-router-dom';
import './ActividadDetalle.css';

const actividades = [
{ id: 1, titulo: 'La Catedral de Sevilla y la Giralda', descripcion: 'Descripción de la Actividad 1', imagen: 'catedral-sevilla-giralda.jpg' },
{ id: 2, titulo: 'El Alcázar de Sevilla', descripcion: 'Descripción de la Actividad 1', imagen: '/public/alcazar-de-sevilla.jpg' },
{ id: 3, titulo: 'Torre del Oro', descripcion: 'Descripción de la Actividad 1', imagen: 'sevilla-torre-del-oro.jpg' },
{ id: 4, titulo: 'Casa de Pilatos', descripcion: 'Descripción de la Actividad 1', imagen: 'casa-de-pilatos.jpg' },
{ id: 5, titulo: 'Archivo de Indias', descripcion: 'Descripción de la Actividad 1', imagen: 'archivo-de-indias.jpg' },
{ id: 6, titulo: 'Huevo de Colón de Sevilla', descripcion: 'Descripción de la Actividad 1', imagen: 'huevo-colón.jpg' },
{ id: 7, titulo: 'Palacio de las Dueñas', descripcion: 'Descripción de la Actividad 1', imagen: 'salon-de-la-gitana-en-el-palacio-de-las-duenas.jpg' },
{ id: 8, titulo: 'Monasterio de San Isidro del Campo', descripcion: 'Descripción de la Actividad 1', imagen: 'monasterio-san-isidoro-del-campo.jpg' },
{ id: 9, titulo: 'Ruinas románicas de Itálica', descripcion: 'Descripción de la Actividad 1', imagen: 'ruinas-románicas-de-italia.jpg' },
{ id: 10, titulo: 'Las Setas de Sevilla', descripcion: 'Descripción de la Actividad 1', imagen: 'sevilla-setas.jpg' },
{ id: 11, titulo: 'Monasterio de la Cartuja', descripcion: 'Descripción de la Actividad 1', imagen: 'monasterio-cartuja-sevilla.jpg' },
{ id: 12, titulo: 'Palacio de la Condesa de Lebrija', descripcion: 'Descripción de la Actividad 1', imagen: 'patio-del-palacio-de-la-condesa-lebrija.jpg' },
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
