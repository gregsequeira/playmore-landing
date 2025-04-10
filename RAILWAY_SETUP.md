# Railway Database Setup Guide

## 1. Create Railway Account
1. Go to [Railway](https://railway.app/)
2. Sign up using GitHub (recommended)
3. Complete your profile setup

## 2. Create PostgreSQL Database
1. Click "New Project"
2. Select "Deploy PostgreSQL" (this will create a new PostgreSQL database)
3. Wait for the database to be created
4. Click on your new PostgreSQL database

## 3. Get Connection Details
1. Click the "Connect" button
2. In the modal that appears, select the "Public Network" tab
3. Copy the "Connection URL" (it will start with postgresql://)
   - This URL contains all your connection details in one string
   - Keep this URL secure as it contains your database credentials

## 4. Set Up Environment Variables
1. Create a `.env` file in your project root
2. Add the Railway connection URL:
   ```
   DATABASE_URL=your_railway_connection_url
   ```

## 5. Initialize Database
1. Install dependencies if you haven't:
   ```bash
   npm install
   ```
2. Run the initialization script:
   ```bash
   node scripts/init-railway-db.js
   ```

## 6. Verify Setup
1. Go back to Railway dashboard
2. Click on your PostgreSQL database
3. Go to the "Data" tab
4. You should see your `waiting_list` table

## 7. Prepare for Vercel Deployment
1. Note down these environment variables for Vercel:
   ```
   DATABASE_URL=your_railway_connection_url
   ```

## Troubleshooting
- If connection fails, check your connection URL
- Make sure you've added the SSL configuration
- Check Railway's status page if you're having issues
- Contact Railway support if problems persist 