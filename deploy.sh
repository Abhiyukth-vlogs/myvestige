#!/usr/bin/env bash

# Abort script on any error
set -e

echo "🚀 Step 1: Building production bundle with Vite..."
npm run build

echo "📦 Step 2: Deploying dist to gh-pages branch..."
npx gh-pages -d dist

echo "✅ Done! Your site has been published to GitHub Pages."
echo "🔗 Visit: https://abhiyukth-vlogs.github.io/myvestige/"
