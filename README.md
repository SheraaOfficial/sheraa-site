
# Sheraa Platform

A comprehensive platform for the Sharjah Entrepreneurship Center (Sheraa), built with React and Laravel.

## Project Structure

This project uses a monorepo approach with:
- Frontend: React (TypeScript) with Vite
- Backend: Laravel API

## Prerequisites

- Node.js (v16+)
- PHP (v8.1+)
- Composer
- MySQL or PostgreSQL
- Docker & Docker Compose (optional)

## Development Setup

### Frontend (React)

1. Install dependencies:
   ```
   npm install
   ```

2. Configure environment:
   ```
   cp .env.example .env
   ```
   Update the `REACT_APP_API_URL` to point to your Laravel backend.

3. Start the development server:
   ```
   npm run dev
   ```

### Backend (Laravel)

1. Navigate to the API directory:
   ```
   cd api
   ```

2. Install dependencies:
   ```
   composer install
   ```

3. Configure environment:
   ```
   cp .env.example .env
   ```
   Update database configuration and other settings.

4. Generate application key:
   ```
   php artisan key:generate
   ```

5. Run migrations:
   ```
   php artisan migrate
   ```

6. Start the development server:
   ```
   php artisan serve
   ```

## Docker Setup

You can also use Docker to run both frontend and backend:

1. Build and start containers:
   ```
   docker-compose up -d
   ```

2. Run migrations:
   ```
   docker-compose exec app php artisan migrate
   ```

## Development Workflow

- Backend changes are made in the `api/` directory
- Frontend changes are made in the `src/` directory
- API endpoints are defined in `api/routes/api.php`
- API types are defined in `src/types/api.ts`

## Build and Deployment

### Build for Production

```
npm run build
```

This will create an optimized production build in the `dist/` directory.

### Laravel Deployment

For Laravel deployment instructions, refer to the [Laravel deployment documentation](https://laravel.com/docs/9.x/deployment).

## Architecture

- Frontend: React, TypeScript, Tailwind CSS, Shadcn UI
- State Management: React Query
- Backend: Laravel, MySQL
- API: RESTful API with Laravel
- Authentication: Laravel Sanctum

## Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Submit a pull request to `develop`

## License

[MIT License](LICENSE)
