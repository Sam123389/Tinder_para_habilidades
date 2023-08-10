const connection = require('./knexfile')['development'];
const db = require('knex')(connection);

async function createRelationships() {
  try {
    const empresas = await db.select('*').from('empresas');
    const usuarios = await db.select('*').from('usuarios');
    const habilidades = await db.select('*').from('habilidades');

    const existingRelationships = await db.select('*').from('relaciones');

    for (const empresa of empresas) {
      for (const usuario of usuarios) {
        if (
          empresa.habilidad_id === usuario.habilidad_id &&
          !existingRelationships.some(
            (relacion) =>
              relacion.empresa_id === empresa.id &&
              relacion.usuario_id === usuario.id &&
              relacion.habilidad_id === empresa.habilidad_id
          )
        ) {
          const relacion = {
            empresa_id: empresa.id,
            usuario_id: usuario.id,
            habilidad_id: empresa.habilidad_id,
          };
          await db('relaciones').insert(relacion);
        }
      }
    }

    console.log('Relaciones creadas exitosamente.');
  } catch (error) {
    console.error('Error al crear relaciones:', error);
  } finally {
    db.destroy();
  }
}

createRelationships();
