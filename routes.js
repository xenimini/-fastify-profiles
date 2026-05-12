export default async function routes(fastify) {
  // GET все профили
  fastify.get('/profiles', async (request, reply) => {
    const client = await fastify.pg.connect();
    try {
      const { rows } = await client.query('SELECT * FROM profiles ORDER BY id');
      return rows;
    } finally {
      client.release();
    }
  });

  // POST новый профиль
  fastify.post('/profiles', async (request, reply) => {
    const { name, age } = request.body;
    
    if (!name || !age) {
      return reply.code(400).send({ error: 'name и age обязательны' });
    }
    
    const client = await fastify.pg.connect();
    try {
      const { rows } = await client.query(
        'INSERT INTO profiles (name, age) VALUES ($1, $2) RETURNING *',
        [name, age]
      );
      return reply.code(201).send(rows[0]);
    } finally {
      client.release();
    }
  });
}