const Noticia = require('../models/noticia.model');
const Persona = require('../models/persona.model');

async function seedDatabase() {
  try {
    await Noticia.deleteMany({});
    await Persona.deleteMany({});

    // Noticias
    const noticia_1 = await Noticia.create({
      titulo: 'La opulenta colección de auto de Lujo',
      descripcion: 'El video, de 40 segundos de duración, muestra una interminable fila de vehículos de alta gama, agrupados por marca, color y modelo. Entre las marcas más destacadas se encuentran Rolls Royce, Audi, Ferrari y Porsche, junto con camionetas de lujo, cuatriciclos e incluso casas rodantes.'
    });
    const noticia_2 = await Noticia.create({
      titulo: 'A un año de asumir, qué piensa la gente del Presidente',
      descripcion: 'Un informe de Proyección Consultores demostró que la imagen del presidente Javier Milei creció por tercer mes consecutivo en noviembre. Patricia Bullrich se ubica como la funcionaria mejor valorada, pero con el mayor índice de desaprobación.'
    });
    const noticia_3 = await Noticia.create({
      titulo: 'El futuro de Colapinto en la Fórmula 1',
      descripcion: 'La incertidumbre domina hoy por hoy el futuro de Franco Colapinto en la Fórmula 1. El piloto argentino disputó su último Gran Premio en Abu Dhabi el último fin de semana y su lugar en la escudería será ocupado por el español Carlos Sainz.'
    });

    const persona_1 = await Persona.create({
      nombre: 'Aurelio',
      apellido: 'Gareca',
      email: 'myemail@example.com'
    });
    const persona_2 = await Persona.create({
      nombre: 'Valentina',
      apellido: 'Álvarez',
      email: 'heremail@outlook.com'
    });
    const persona_3 = await Persona.create({
      nombre: 'Silvina',
      apellido: 'Álvares',
      email: 'heremailtoo@gmail.com'
    });
    persona_1.publicaciones.push({
      descripcion: 'Hola, soy la publicación de Aurelio'
    });
    persona_1.amigos.push(persona_2._id);
    persona_1.save();
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = seedDatabase;