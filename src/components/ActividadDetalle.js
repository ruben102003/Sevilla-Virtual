import React from 'react';
import { useParams } from 'react-router-dom';
import './ActividadDetalle.css';

const actividades = [
  { 
    id: 1, 
    titulo: 'La Catedral de Sevilla y la Giralda', 
    descripcion: [
      'La Giralda es el nombre que recibe el campanario de la Catedral de Sevilla. Con sus 50 metros de altura, luce orgullosa como uno de los monumentos de estilo árabe de Sevilla más bonitos. Para subir a la Giralda lo has de hacer desde dentro de la Catedral (incluido en el precio de la entrada).',
      'La Catedral de Sevilla es el templo gótico más grande de España. Estamos ante una catedral enorme de 5 naves y muchas capillas. Es uno de los monumentos de Sevilla más importantes a visitar por dentro, sobre todo por su impresionante retablo. Para ahorrarte las colas de entrada que hay cualquier día del año, lo mejor es que reserves la visita guiada con guía oficial. Nosotros lo visitamos la Catedral con guía y aprendimos mucho sobre la historia y los elementos arquitectónicos más importantes de la Catedral. ¡El guía que nos tocó fue muy ameno! Al final de la visita, subes a la Giralda para ver las vistas a la ciudad.',
      'Para no alargarnos por aquí, te dejamos nuestro artículo específico de la Catedral de Sevilla con toda la información práctica para organizar la visita.'
    ], 
    horario: [
      'Lunes: 11-15.30h',
      'Martes a sábado: 11-17h',
      'Domingo: 14.30-18h'
    ],
    imagen: '/images/catedral-sevilla-giralda.jpg'
  },
  { 
    id: 2, 
    titulo: 'El Alcázar de Sevilla', 
    descripcion: [
      'Al lado de la Catedral, está el Real Alcázar de Sevilla. También se le conoce como Reales Alcázares porque en realidad son una serie de palacios que se fueron construyendo a lo largo de los siglos. Para nosotros, la visita al interior del Alcázar de Sevilla es totalmente imprescindible (incluso si sólo tienes un día para ver Sevilla).',
      'Piensa que es el monumento más famoso de Sevilla por lo que aquí sí que hay unas colas de horas. Esta es la que vimos nosotros el día que fuimos:',
      'Como en la Catedral, si reservas la visita guiada, te ahorras las colas porque entras por la entrada de grupos. Sobre todo, si es verano o primavera, en Sevilla hace mucho calor y puedes perder la paciencia en la cola. Ojo porque si vas a hacer la visita guiada de la Catedral y el Alcázar, te interesa la visita guiada conjunta para ahorrar dinero. Todo lo que encontrarás en el interior de este impresionante monumento, te lo explicamos en el post específico del Alcázar de Sevilla.'
    ], 
    horario: [
      'De octubre a marzo: todos los días de 9.30-17h',
      'De abril a septiembre: todos los días de 9.30-19h'
    ],
    imagen: '/images/alcazar-de-sevilla.jpg'
  },
  { 
    id: 3, 
    titulo: 'Torre del Oro', 
    descripcion: [
      'Lo bonito de la Torre del Oro es su situación: en pleno río Guadalquivir. Se llama así porque antiguamente estaba cubierta de azulejos que producían reflejos dorados. Hoy en día es sólo piedra, pero es un sitio muy fotogénico casi a cualquier hora del día. Sin embargo, su interior no nos convenció. La torre por dentro contiene una exposición marítima que creemos que te la puedes ahorrar a no ser que seas muy aficionado del tema.',
      'Precio: 3€ adultos. 1.5€ niños de 6 a 14 años y mayores de 65 años. Los lunes es gratis.'
    ], 
    horario: [
      'De lunes a viernes: 9.30-18h',
      'Sábados y domingos: 10.30-18h'
    ],
    imagen: '/images/sevilla-torre-del-oro.jpg'
  },
  { 
    id: 4, 
    titulo: 'Casa de Pilatos', 
    descripcion: [
      'Casa de Pilatos es uno de los palacios andaluces más recomendados de Sevilla. Si vas a estar 2 o 3 días en Sevilla, te recomendamos entrar a visitarlo por dentro. El palacio gira entorno a un bonito patio. Lo peculiar de Casa de Pilatos es que tiene una mezcla de estilo mudéjar y renacentista ya que la familia Enríquez de Ribera quiso decorar parte del palacio con influencias italianas. En la actualidad, el palacio es propiedad de la Fundación Medinaceli.',
      'Precio: 10€ planta principal, 12€ la casa entera. Niños menores de 11 años: gratis.'
    ], 
    horario: [
      'Lunes a viernes: 9.30-18h',
      'Fines de semana: 10.30-18h'
    ],
    imagen: '/images/casa-de-pilatos.jpg'
  },
  { 
    id: 5, 
    titulo: 'Archivo de Indias', 
    descripcion: [
      'Toda la documentación de la Conquista de América y de las Filipinas se guarda en el Archivo de Indias. Este archivo lo mandó construir Carlos III en 1785. Actualmente es Patrimonio de la Humanidad por la UNESCO. Cuando visitas el Archivo de Indias puedes ver las diferentes salas abiertas al público, pero los documentos no se pueden consultar a no ser que pidas permiso formal por escrito. De todas formas, suelen haber exposiciones de algunos documentos de gran valor. Te recomendamos entrar por dentro ya que es una visita rápida y de mucha importancia histórica.',
      'Precio: gratis'
    ], 
    horario: [
      'Lunes: cerrado',
      'Martes a sábado: 9.30-17h',
      'Domingo: 10-14h'
    ],
    imagen: '/images/archivo-de-indias.jpg'
  }
  ,
  { 
    id: 6, 
    titulo: 'Huevo de Colón de Sevilla', 
    descripcion: [
      'Aunque todos los sevillanos lo conocen como el Huevo de Colón, el nombre original de este monumento de Sevilla es el Nacimiento del Hombre Nuevo. La estatua está situada en el Parque de San Jerónimo y fue una donación del Ayuntamiento de Moscú.',
      'El Mundo está representado como un gran huevo y dentro está Cristóbal Colón con su mapa. Si paseas por esta zona del norte de Sevilla (está cerca del Monasterio de San Jerónimo), puedes acercarte a verlo.',
      'Precio: gratis'
    ], 
    horario: [
        'A la hora que prefieras'
    ],
    imagen: '/images/huevo-colón.jpg'
  },
  { 
    id: 7, 
    titulo: 'Palacio de las Dueñas', 
    descripcion: [
      'El Palacio de las Dueñas está en pleno centro de Sevilla y pertenece a la Casa de Alba. Se construyó entre los siglos XV y XVI. La visita interior es un recorrido a través de las diferentes estancias, patios y jardines. Algunas habitaciones están muy bien amuebladas con elementos de cerámica, antigüedades y recuerdos de la familia de Alba. Es uno de los monumentos más importantes de Sevilla por el buen estado en el que se encuentra el palacio. Si quieres saber más sobre esta visita, te recomendamos nuestro artículo de la visita al Palacio de las Dueñas.'
    ], 
    horario: [
      'Abril a septiembre: todos los días de 10-20h.',
      'Octubre a marzo: todos los días de 10-18h.'
    ],
    imagen: '/images/salon-de-la-gitana-en-el-palacio-de-las-duenas.jpg'
  },
  { 
    id: 8, 
    titulo: 'Monasterio de San Isidro del Campos', 
    descripcion: [
      'El Monasterio de San Isidro del Campo está situado a 7 km de Sevilla, por lo que es una visita que solo te recomiendo hacer si vas a estar más de 3 días en la ciudad y quieres hacer una excursión. El exterior del monasterio es de estilo mudéjar y está fortificado. La visita interior es un recorrido por sus dos iglesias, sus claustros y salas. Sus 500 años de historia se notan en los diferentes estilos del interior: gótico, mudéjar, renacentista y barroco.'
    ], 
    horario: [
      'Lunes cerrado.',
      'Resto de días de 10-14:30h.'
    ],
    imagen: '/images/monasterio-san-isidoro-del-campo.jpg'
  },
  { 
    id: 9, 
    titulo: 'Ruinas románicas de Itálica', 
    descripcion: [
      'Itálica fue la primera ciudad romana de Hispania, fundada en el 206 a.C. Está situada a unos 10 km del centro de Sevilla, por lo que supone una excursión de medio día desde la capital. El yacimiento arqueológico está considerado uno de los más importantes de España. ¡Necesitarás unas 2h para verlo entero! Aquí encontrarás los restos de las murallas, el anfiteatro, las termas romanas y las casas de las familias ricas de la época que se construyeron sus casas dentro de Itálica.',
      'En caso de que no quieras perderte detalle y quieras conocer la historia de Itálica, este es un sitio que recomendamos hacer con una excursión desde Sevilla o con un free tour. De esta manera, un guía especializado te irá explicando todo y podrás recrearte en la época para entender la importancia del lugar.'
    ], 
    horario: [
      'Martes a domingo: 9-15h',
      'Lunes cerrado.'
    ],
    imagen: '/images/ruinas-románicas-de-italia.jpg'
  },
  { 
    id: 10, 
    titulo: 'Las Setas de Sevilla', 
    descripcion: [
      'Las Setas de Sevilla es uno de los monumentos más modernos de la ciudad. Se inauguró en 2010 y está considerada la estructura de madera más grande del mundo. Tiene 5 niveles en los que encontrarás de más abajo a más arriba: el Museo Arqueológico, el mercado, la plaza, las pasarelas y el mirador. En el museo arqueológico podrás ver parte de los restos de la Sevilla romana desde el 30 a.C hasta el siglo VI.',
      'A este monumento de Sevilla también se le conoce como Metropol Parasol. El arquitecto es Jürgen Mayer. La entrada cuesta 3€ e incluye una consumición en un bar de las Setas. Te recomiendo subir al atardecer para disfrutar de unas bonitas vistas y acabar el día en alguno de sus bares o restaurantes.'
    ], 
    horario: [
      'Domingo a Jueves: 9.30 – 23.00 h',
      'Viernes y Sábado: 9.30 –23.30 h'
    ],
    imagen: '/images/sevilla-setas.jpg'
  },
  { 
    id: 11, 
    titulo: 'Monasterio de la Cartuja', 
    descripcion: [
      'El Monasterio de la Cartuja está en la isla de la Cartuja, un barrio que se construyó por la Expo del 92 en la orilla izquierda del río Guadalquivir. A lo largo de los siglos ha tenido diferentes funciones. En el siglo XV, el arzobispo Gonzalo de Mena fundó el monasterio. En el siglo XIX pasó a ser una fábrica de loza y desde 1997 es la sede del Centro Andaluz de Arte Contemporáneo (CAAC).',
      'La visita al monasterio de la Cartuja es bastante curiosa porque no queda casi nada de la decoración cristiana del monasterio. Puedes visitar los claustros y las estancias donde se realizan actualmente algunas exposiciones temporales. Además, verás la chimenea de la fábrica de loza. Este monumento de Sevilla está rodeado de grandes jardines.'
    ], 
    horario: [
      'Martes a viernes: 10-20h',
      'Sábado: 11-15h',
      'Domingo: 10-15h'
    ],
    imagen: '/images/monasterio-cartuja-sevilla.jpg'
  },
  { 
    id: 12, 
    titulo: 'Palacio de la Condesa de Lebrija', 
    descripcion: [
      'Esta es una de las casas de Sevilla más bonitas de visitar porque cuenta con unos mosaicos romanos espectaculares de más de 600 metros cuadrados. La Condesa de Lebrija era una gran amante de la arqueología y compró restos romanos de los yacimientos de Itálica para decorar su casa.',
      'La casa es un auténtico museo arqueológico con piezas de todo el Mundo que se exponen en vitrinas. Los mosaicos están por todo el Palacio de la Condesa de Lebrija, aunque el más bonito es el mosaico del Dios de Pan que ocupa todo el patio central. Además, una de las estancias es una biblioteca con más de 5.000 libros.'
    ], 
    horario: [
      'Viernes, sábado y domingo, de 10:00 a 14:00'
    ],
    imagen: '/images/patio-del-palacio-de-la-condesa-lebrija.jpg'
  }
  ,
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
      {actividad.descripcion.map((parrafo, index) => (
        <p key={index}>{parrafo}</p>
      ))}
      <h3>Horario:</h3>
      <ul>
        {actividad.horario && actividad.horario.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ActividadDetalle;
