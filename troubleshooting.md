# Troubleshooting Vercel Deployment Issues

## Common Issues and Solutions

### 1. "Command 'npm run vercel-build' exited with 1"

This error indicates that the build script failed. Check the build logs for more specific error messages.

#### Possible solutions:

- **Dependency conflicts**: Try updating problematic packages to compatible versions
- **Node.js version**: Make sure you're using a compatible Node.js version (we've set it to 18+)
- **Memory issues**: Large projects might run out of memory during build. Try adding `NODE_OPTIONS="--max_old_space_size=4096"` to your build command

### 2. Module not found errors

If you see errors like "Module not found: Can't resolve 'package-name'", it means a dependency is missing or not properly installed.

#### Possible solutions:

- Make sure all dependencies are listed in package.json
- Try installing the specific package manually: `npm install package-name --legacy-peer-deps`
- Check for case sensitivity issues in import statements

### 3. Three.js specific issues

Three.js and related packages often cause deployment issues due to their complex dependencies.

#### Possible solutions:

- Make sure all Three.js components are properly client-side rendered with 'use client' directive
- Try using dynamic imports for Three.js components:
  ```javascript
  const ThreeComponent = dynamic(() => import('../components/ThreeComponent'), {
    ssr: false
  });
  ```
- Add Three.js related packages to the transpilePackages array in next.config.js

### 4. Environment variable issues

If your app relies on environment variables, make sure they're properly set in Vercel.

#### Possible solutions:

- Add environment variables in the Vercel dashboard under Project Settings > Environment Variables
- Make sure you're using the correct naming convention (NEXT_PUBLIC_ prefix for client-side variables)

### 5. Build timeout

Vercel has a build time limit (currently 45 minutes for Pro plans, less for free plans).

#### Possible solutions:

- Optimize your build process
- Consider using build caching
- Split your project into smaller deployments if possible

## Getting More Help

If you're still experiencing issues, you can:

1. Check the detailed build logs in the Vercel dashboard
2. Contact Vercel support (available for Pro plans)
3. Post your issue on [GitHub Discussions](https://github.com/vercel/next.js/discussions) or [Stack Overflow](https://stackoverflow.com/questions/tagged/vercel)
4. Join the [Vercel Discord community](https://vercel.com/discord)
