import React from 'react';
import { Link } from 'react-router-dom';
import './Novedades.css';

const actividades = [
  { id: 1, titulo: 'La Catedral de Sevilla y la Giralda', imagen: 'catedral-sevilla-giralda.jpg' },
  { id: 2, titulo: 'El Alcázar de Sevilla', imagen: 'catedral-sevilla-giralda.jpg' },
  { id: 3, titulo: 'Torre del Oro', imagen: '/path/to/image3.jpg' },
  { id: 4, titulo: 'Casa de Pilatos', imagen: '/path/to/image4.jpg' },
  { id: 5, titulo: 'Archivo de Indias', imagen: '/path/to/image5.jpg' },
  { id: 6, titulo: 'Huevo de Colón de Sevilla', imagen: '/path/to/image6.jpg' },
  { id: 7, titulo: 'Palacio de las Dueñas', imagen: '/path/to/image7.jpg' },
  { id: 8, titulo: 'Monasterio de San Isidro del Campo', imagen: '/path/to/image8.jpg' },
  { id: 9, titulo: 'Ruinas románicas de Itálica', imagen: '/path/to/image9.jpg' },
  { id: 10, titulo: 'Las Setas de Sevilla', imagen: '/path/to/image10.jpg' },
  { id: 11, titulo: 'Monasterio de la Cartuja', imagen: '/path/to/image11.jpg' },
  { id: 12, titulo: 'Palacio de la Condesa de Lebrija', imagen: '/path/to/image12.jpg' },
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
