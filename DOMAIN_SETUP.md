# Domain Setup Guide for playmore.co.za

## 1. Deploy to Vercel
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Create a new project and import your repository
4. Configure environment variables
5. Deploy your application

## 2. Add Domain to Vercel
1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add "playmore.co.za" as your domain
3. Vercel will provide you with DNS records to add to your domain registrar

## 3. Configure DNS Records
1. Log in to your domain registrar (where playmore.co.za was purchased)
2. Find the DNS management section
3. Add the following records:

### For the root domain (playmore.co.za):
```
Type: A
Name: @
Value: [Vercel's IP address]
TTL: Auto
```

### For the www subdomain (www.playmore.co.za):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

## 4. SSL Certificate
- Vercel will automatically provision an SSL certificate for your domain
- This will enable HTTPS for your site

## 5. Verify Setup
1. Wait for DNS propagation (can take up to 48 hours, but usually much faster)
2. Visit www.playmore.co.za to verify it's working
3. Check that HTTPS is working correctly

## Troubleshooting
- If the site doesn't load, check your DNS records
- Verify that the domain is properly added in Vercel
- Check Vercel's deployment logs for any errors
- Contact your domain registrar if you have issues with DNS settings 