# Deploying with Vercel CLI

If you're still experiencing issues with the Vercel deployment, follow these steps to deploy using the Vercel CLI:

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy your project:
```bash
vercel --prod
```

4. During the deployment process, you'll be asked a few questions:
   - Set up and deploy? Yes
   - Which scope? (Select your account)
   - Link to existing project? (Select your project or create a new one)
   - Override settings? Yes
   - Build Command: npm install --legacy-peer-deps --force && npm run build
   - Output Directory: .next
   - Development Command: npm run dev

This approach gives you more control over the deployment process and allows you to see detailed logs if there are any issues.
