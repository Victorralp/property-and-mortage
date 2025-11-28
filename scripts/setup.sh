#!/bin/bash

# Naija Property Marketplace - Automated Setup Script
# This script helps you set up the development environment quickly

echo "🏠 Welcome to Naija Property Marketplace Setup"
echo "=============================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js is installed: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ npm is installed: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies."
    exit 1
fi

echo "✅ Dependencies installed successfully!"
echo ""

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    echo "✅ .env file created!"
    echo ""
    echo "⚠️  IMPORTANT: Please update the .env file with your actual credentials:"
    echo "   - Firebase configuration"
    echo "   - Cloudinary configuration"
    echo ""
else
    echo "ℹ️  .env file already exists. Skipping..."
    echo ""
fi

# Check if Firebase CLI is installed
echo "🔥 Checking Firebase CLI..."
if ! command -v firebase &> /dev/null; then
    echo "⚠️  Firebase CLI is not installed."
    echo "   To deploy to Firebase, install it with:"
    echo "   npm install -g firebase-tools"
    echo ""
else
    echo "✅ Firebase CLI is installed: $(firebase --version)"
    echo ""
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p public/assets
mkdir -p public/images
echo "✅ Directories created!"
echo ""

# Display next steps
echo "🎉 Setup complete!"
echo ""
echo "📋 Next Steps:"
echo "=============="
echo "1. Update .env file with your Firebase and Cloudinary credentials"
echo "2. Setup Firebase project:"
echo "   - Go to https://console.firebase.google.com/"
echo "   - Create a new project"
echo "   - Enable Authentication, Firestore, and Storage"
echo "   - Copy configuration to .env"
echo ""
echo "3. Setup Cloudinary:"
echo "   - Go to https://cloudinary.com/"
echo "   - Create account and get credentials"
echo "   - Create an unsigned upload preset"
echo "   - Copy configuration to .env"
echo ""
echo "4. Start the development server:"
echo "   npm run dev"
echo ""
echo "5. Build for production:"
echo "   npm run build"
echo ""
echo "📚 For detailed setup instructions, see SETUP_GUIDE.md"
echo ""
echo "💡 Need help? Check out:"
echo "   - README.md for project overview"
echo "   - SETUP_GUIDE.md for detailed setup"
echo "   - PROJECT_SUMMARY.md for architecture details"
echo "   - CONTRIBUTING.md for contribution guidelines"
echo ""
echo "Happy coding! 🚀"
