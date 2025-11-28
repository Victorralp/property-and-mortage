#!/bin/bash

# Verification script to ensure all essential files exist

echo "🔍 Naija Property Marketplace - File Verification"
echo "=================================================="
echo ""

MISSING_FILES=0

# Function to check if file exists
check_file() {
    if [ -f "$1" ]; then
        echo "✅ $1"
    else
        echo "❌ $1 - MISSING"
        MISSING_FILES=$((MISSING_FILES + 1))
    fi
}

# Check configuration files
echo "📋 Configuration Files:"
check_file "package.json"
check_file "vite.config.js"
check_file "tailwind.config.js"
check_file ".env.example"
check_file ".gitignore"
check_file ".eslintrc.cjs"
echo ""

# Check Firebase files
echo "🔥 Firebase Files:"
check_file "firebase.json"
check_file "firestore.rules"
check_file "firestore.indexes.json"
check_file "storage.rules"
echo ""

# Check documentation
echo "📚 Documentation:"
check_file "README.md"
check_file "SETUP_GUIDE.md"
check_file "PROJECT_SUMMARY.md"
check_file "QUICK_START.md"
check_file "CONTRIBUTING.md"
check_file "LICENSE"
check_file "FILE_STRUCTURE.md"
echo ""

# Check main source files
echo "💻 Main Source Files:"
check_file "src/main.jsx"
check_file "src/App.jsx"
check_file "src/styles/index.css"
echo ""

# Check common components
echo "🧩 Common Components:"
check_file "src/components/common/Navbar.jsx"
check_file "src/components/common/Footer.jsx"
check_file "src/components/common/Loader.jsx"
check_file "src/components/common/ProtectedRoute.jsx"
check_file "src/components/common/ScrollToTop.jsx"
echo ""

# Check home components
echo "🏠 Home Components:"
check_file "src/components/home/Hero.jsx"
check_file "src/components/home/Features.jsx"
check_file "src/components/home/FeaturedProperties.jsx"
check_file "src/components/home/HowItWorks.jsx"
echo ""

# Check pages
echo "📄 Pages:"
check_file "src/pages/Home.jsx"
check_file "src/pages/Properties.jsx"
check_file "src/pages/PropertyDetail.jsx"
check_file "src/pages/Mortgage.jsx"
check_file "src/pages/Contact.jsx"
check_file "src/pages/Login.jsx"
check_file "src/pages/Register.jsx"
check_file "src/pages/UserDashboard.jsx"
check_file "src/pages/Analytics.jsx"
check_file "src/pages/NotFound.jsx"
echo ""

# Check services
echo "🔌 Services:"
check_file "src/services/firebase.js"
check_file "src/services/cloudinary.js"
check_file "src/services/propertyService.js"
check_file "src/services/mortgageService.js"
check_file "src/services/aiService.js"
echo ""

# Check context
echo "🌍 Context:"
check_file "src/context/AuthContext.jsx"
check_file "src/context/AppContext.jsx"
echo ""

# Check utils
echo "🛠️ Utils:"
check_file "src/utils/constants.js"
check_file "src/utils/helpers.js"
echo ""

# Check public files
echo "🌐 Public Files:"
check_file "index.html"
check_file "public/favicon.svg"
echo ""

# Check scripts
echo "🔧 Scripts:"
check_file "scripts/setup.sh"
echo ""

# Summary
echo "=================================================="
if [ $MISSING_FILES -eq 0 ]; then
    echo "✅ All files present! Project structure is complete."
    echo ""
    echo "🎉 You're ready to start development!"
    echo ""
    echo "Next steps:"
    echo "1. Run: npm install"
    echo "2. Setup .env file"
    echo "3. Run: npm run dev"
    exit 0
else
    echo "⚠️  $MISSING_FILES file(s) missing!"
    echo "Please check the output above for details."
    exit 1
fi
