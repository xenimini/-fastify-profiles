import Fastify from 'fastify';
import fastifyPostgres from '@fastify/postgres';
import routes from './routes.js';
import dotenv from 'dotenv';

dotenv.config();

const fastify = Fastify({ logger: true });

// Регистрируем PostgreSQL
fastify.register(fastifyPostgres, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Регистрируем маршруты
fastify.register(routes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Сервер запущен на http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();