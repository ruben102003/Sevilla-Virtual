import React from 'react';
import './Novedades.css';

function Novedades() {
  return (
    <section>
      <h2>Novedades</h2>
      <div className="actividad">
        <h3>Actividad 1</h3>
        <img src="actividad1.jpg" alt="Actividad 1" />
        <p>Descripción de la actividad 1...</p>
      </div>
      <div className="actividad">
        <h3>Actividad 2</h3>
        <img src="actividad2.jpg" alt="Actividad 2" />
        <p>Descripción de la actividad 2...</p>
      </div>
      {/* Agregar más actividades según sea necesario */}
    </section>
  );
}

export default Novedades;
