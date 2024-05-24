import React, { useEffect } from 'react';
import './Alojamiento.css';

function Alojamiento() {
  useEffect(() => {
    window.location.href = 'https://www.booking.com/city/es/sevilla.html';
  }, []);

  return (
    <section>
      <h2>Redirigiendo a Booking...</h2>
    </section>
  );
}

export default Alojamiento;
