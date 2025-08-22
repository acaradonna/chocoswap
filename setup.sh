#!/bin/bash

# Chocoswap Repository Setup Script
# This script helps set up the development environment and GitHub repository

set -e

echo "🍫 Chocoswap Repository Setup"
echo "=============================="

# Check if we're in the right directory
if [ ! -f "README.md" ] || [ ! -d ".github" ]; then
    echo "❌ Please run this script from the root of the chocoswap repository"
    exit 1
fi

echo "📦 Installing contract dependencies..."
cd contracts
npm install
echo "✅ Contract dependencies installed"

echo "🔨 Compiling contracts..."
npm run build
echo "✅ Contracts compiled"

echo "🧪 Running tests..."
npm test
echo "✅ Tests passed"

echo "🔍 Running linter..."
npm run lint
echo "✅ Linting passed"

cd ..

echo ""
echo "🏷️  Next Steps:"
echo "==============="
echo ""
echo "1. Create GitHub milestones:"
echo "   - Copy milestone definitions from MILESTONES.md"
echo "   - Create each milestone (M0-M6) in GitHub"
echo ""
echo "2. Create GitHub labels:"
echo "   - Use the commands in LABELS.md to create labels"
echo "   - Or copy the label definitions manually"
echo ""
echo "3. Create GitHub issues:"
echo "   - Copy issue templates from ISSUES.md"
echo "   - Create each issue with proper labels and milestone assignment"
echo ""
echo "4. Set up repository settings:"
echo "   - Enable branch protection for main branch"
echo "   - Require PR reviews"
echo "   - Require status checks"
echo ""
echo "5. Configure secrets:"
echo "   - Add RPC URLs for deployment"
echo "   - Add API keys for contract verification"
echo ""
echo "📚 Documentation:"
echo "=================="
echo "- Project Overview: README.md"
echo "- Milestones: MILESTONES.md"  
echo "- Issues: ISSUES.md"
echo "- Labels: LABELS.md"
echo "- Contributing: CONTRIBUTING.md"
echo "- Security: SECURITY.md"
echo ""
echo "🎉 Repository setup complete!"
echo "🚀 Ready to start development!"