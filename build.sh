#!/bin/bash

# Install dependencies with force flags
npm install --legacy-peer-deps --force

# Install TypeScript dependencies explicitly
npm install --save-dev typescript @types/react @types/node @types/react-dom

# Run the build
npm run build
