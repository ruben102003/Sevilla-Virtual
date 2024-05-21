import React from 'react';
import './QuienesSomos.css';

function QuienesSomos() {
  return (
    <div className="quienes-somos">
      <div className="column-container">
        <div className="section">
          <h2>Sobre Nosotros</h2>
          <p>
            Sevilla Virtual es una plataforma dedicada a ofrecer la mejor experiencia de viaje virtual
            en Sevilla. Descubre monumentos, alojamientos y actividades turísticas que te permitirán
            disfrutar de esta maravillosa ciudad desde la comodidad de tu hogar.
          </p>
        </div>
        <div className="section">
          <h2>Nuestra Misión</h2>
          <p>
            Nuestra misión es proporcionar una guía completa y actualizada de Sevilla para turistas y
            locales, destacando las principales atracciones, eventos y opciones de alojamiento.
            Queremos que cada visitante tenga una experiencia inolvidable en Sevilla.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuienesSomos;
