# Vercel Deployment Guide

## 1. Push to GitHub
1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub
3. Add the remote and push:
   ```bash
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

## 2. Deploy to Vercel
1. Go to [Vercel](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: next build
   - Output Directory: .next
   - Install Command: npm install

6. Add Environment Variables:
   - Click "Environment Variables"
   - Add your Railway database URL:
     ```
     DATABASE_URL=your_railway_connection_url
     ```

7. Click "Deploy"

## 3. Post-Deployment
1. Wait for the deployment to complete
2. Test the waitlist form
3. Verify data is being saved to Railway
4. Check the application logs for any errors

## 4. Connect Your Domain (Optional)
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your domain (playmore.co.za)
4. Follow Vercel's instructions to update DNS settings

## Troubleshooting
- Check Vercel deployment logs for errors
- Verify environment variables are set correctly
- Test the database connection
- Check Railway logs if database operations fail 