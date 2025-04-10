# Deployment Guide

## Prerequisites
- Node.js (v18 or later)
- PostgreSQL database
- Vercel account (for frontend deployment)
- Railway or similar service (for database hosting)

## 1. Database Setup
1. Set up a PostgreSQL database on your preferred hosting service (Railway, Supabase, etc.)
2. Get your database connection details (host, user, password, database name)
3. Update the `.env.production` file with your production database credentials
4. Add production database credentials to your local `.env` file:
   ```
   PROD_DB_USER=your_production_db_user
   PROD_DB_HOST=your_production_db_host
   PROD_DB_NAME=your_production_db_name
   PROD_DB_PASSWORD=your_production_db_password
   PROD_DB_PORT=5432
   ```

## 2. Data Migration
1. Initialize the production database using the `init-db.js` script
2. Run the data migration script to transfer your local data:
   ```bash
   node scripts/migrate-data.js
   ```
3. Verify the data was transferred correctly

## 3. Build and Test Locally
```bash
# Install dependencies
npm install

# Build the application
npm run build

# Test the production build locally
npm start
```

## 4. Deploy to Vercel
1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Create a new project and import your repository
4. Configure environment variables in Vercel:
   - Add all variables from `.env.production`
5. Deploy!

## 5. Post-Deployment
1. Verify your application is running correctly
2. Test the waitlist form functionality
3. Check that the database connection is working
4. Monitor the application logs for any errors

## Environment Variables
Make sure these variables are set in your production environment:
- `DB_USER`
- `DB_HOST`
- `DB_NAME`
- `DB_PASSWORD`
- `DB_PORT`

## Troubleshooting
- Check Vercel logs for deployment errors
- Verify database connection details
- Ensure all environment variables are set correctly
- Test the application in production mode locally before deploying
- If data migration fails, check both local and production database connections 