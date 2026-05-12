## README.md

```markdown
# Fastify Profiles API

REST API сервер на Fastify с PostgreSQL.

## Запуск

```bash
npm install
npm run dev
```

Сервер запустится на `http://localhost:3000`

## Переменные окружения

Создайте `.env` файл:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=ваш_пароль
DB_NAME=profiles_db
```

## База данных

```sql
CREATE DATABASE profiles_db;

CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INTEGER NOT NULL
);
```

## API

### GET /profiles
Получить все профили

### POST /profiles
Создать профиль

**Body:**
```json
{
  "name": "Анна",
  "age": 25
}
```

## Команды

| Команда | Действие |
|---------|----------|
| `npm run dev` | Запуск с автоперезагрузкой |
| `npm start` | Обычный запуск |
```
