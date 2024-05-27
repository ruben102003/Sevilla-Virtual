import React from 'react';
import { Link } from 'react-router-dom';
import './Novedades.css';

const actividades = [
  { id: 1, titulo: 'La Catedral de Sevilla y la Giralda', imagen: '/images/catedral-sevilla-giralda.jpg' },
  { id: 2, titulo: 'El Alcázar de Sevilla', imagen: '/images/alcazar-de-sevilla.jpg' },
  { id: 3, titulo: 'Torre del Oro', imagen: '/images/sevilla-torre-del-oro.jpg' },
  { id: 4, titulo: 'Casa de Pilatos', imagen: '/images/casa-de-pilatos.jpg' },
  { id: 5, titulo: 'Archivo de Indias', imagen: '/images/archivo-de-indias.jpg' },
  { id: 6, titulo: 'Huevo de Colón de Sevilla', imagen: '/images/huevo-colón.jpg' },
  { id: 7, titulo: 'Palacio de las Dueñas', imagen: '/images/salon-de-la-gitana-en-el-palacio-de-las-duenas.jpg' },
  { id: 8, titulo: 'Monasterio de San Isidro del Campo', imagen: '/images/monasterio-san-isidoro-del-campo.jpg' },
  { id: 9, titulo: 'Ruinas románicas de Itálica', imagen: '/images/ruinas-románicas-de-italia.jpg' },
  { id: 10, titulo: 'Las Setas de Sevilla', imagen: '/images/sevilla-setas.jpg' },
  { id: 11, titulo: 'Monasterio de la Cartuja', imagen: '/images/monasterio-cartuja-sevilla.jpg' },
  { id: 12, titulo: 'Palacio de la Condesa de Lebrija', imagen: '/images/patio-del-palacio-de-la-condesa-lebrija.jpg' },
];

function Novedades() {
  return (
    <div className="novedades">
      {actividades.map(actividad => (
        <div key={actividad.id} className="actividad">
          <h3>
            <Link to={`/actividad/${actividad.id}`}>{actividad.titulo}</Link>
          </h3>
          <img src={actividad.imagen} alt={actividad.titulo} />
        </div>
      ))}
    </div>
  );
}

export default Novedades;
