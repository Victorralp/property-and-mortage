# Naija Property Marketplace

An AI-powered property and mortgage marketplace designed specifically for the Nigerian market to address the country's housing deficit.

## 🌟 Features

### 1. Homepage
- Engaging hero section with platform mission
- Key features showcase (AI rent prediction, affordable housing, mortgage matching)
- User-friendly property search bar
- Featured properties section
- How it works section

### 2. Property Listings
- Comprehensive property cards with high-quality images
- Detailed property descriptions and specifications
- AI-generated fair rent predictions
- Advanced filters (price range, location, property type, bedrooms, etc.)
- Map view integration
- Save favorite properties

### 3. Mortgage Services
- Various mortgage products showcase
- Interactive mortgage calculator
- AI-powered mortgage matching tool
- Application tracking
- Mortgage eligibility checker

### 4. User Account Area
- Secure authentication (Email/Password, Google Sign-in)
- Personal dashboard
- Saved properties management
- Mortgage application tracking
- Personalized recommendations
- Profile management

### 5. Analytics Dashboard
- Premium feature for investors
- Market trends visualization
- Property performance metrics
- ROI calculations
- Location-based insights
- Comparative analysis tools

### 6. Contact & Support
- Multiple contact methods
- Comprehensive FAQ section
- Live chat support
- Resource center for buyers and renters
- Newsletter subscription

### 7. Mobile Responsive
- Fully responsive design
- Optimized for all devices (mobile, tablet, desktop)
- Touch-friendly interface
- Progressive Web App capabilities

### 8. SEO Optimized
- Meta tags optimization
- Structured data
- Sitemap generation
- Fast loading times
- Semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Image Management**: Cloudinary
- **Charts**: Recharts
- **Forms**: React Hook Form
- **Icons**: React Icons
- **Animations**: Framer Motion
- **SEO**: React Helmet Async

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd naija-property-marketplace
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables (see `.env.example`):
```bash
cp .env.example .env
```

4. Update the `.env` file with your Firebase, Cloudinary, and other API credentials.

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
The application will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password and Google providers)
3. Create a Firestore database
4. Enable Storage for file uploads
5. Copy your Firebase config to `.env`

### Cloudinary Setup
1. Create a Cloudinary account at [Cloudinary](https://cloudinary.com/)
2. Get your Cloud Name, API Key, and API Secret
3. Create an upload preset for unsigned uploads
4. Copy credentials to `.env`

## 📁 Project Structure

```
naija-property-marketplace/
├── public/
│   ├── favicon.svg
│   └── og-image.jpg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── FeaturedProperties.jsx
│   │   │   └── HowItWorks.jsx
│   │   ├── properties/
│   │   │   ├── PropertyCard.jsx
│   │   │   ├── PropertyDetails.jsx
│   │   │   ├── PropertyFilters.jsx
│   │   │   └── AIRentPrediction.jsx
│   │   ├── mortgage/
│   │   │   ├── MortgageCard.jsx
│   │   │   ├── MortgageCalculator.jsx
│   │   │   └── MortgageMatchingTool.jsx
│   │   ├── user/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Favorites.jsx
│   │   │   ├── Applications.jsx
│   │   │   └── Profile.jsx
│   │   ├── analytics/
│   │   │   ├── InvestorDashboard.jsx
│   │   │   ├── MarketTrends.jsx
│   │   │   └── PropertyMetrics.jsx
│   │   └── contact/
│   │       ├── ContactForm.jsx
│   │       └── FAQ.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Properties.jsx
│   │   ├── PropertyDetail.jsx
│   │   ├── Mortgage.jsx
│   │   ├── UserDashboard.jsx
│   │   ├── Analytics.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── AppContext.jsx
│   ├── services/
│   │   ├── firebase.js
│   │   ├── cloudinary.js
│   │   ├── propertyService.js
│   │   ├── mortgageService.js
│   │   └── aiService.js
│   ├── utils/
│   │   ├── helpers.js
│   │   └── constants.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🌍 Deployment

### Deploying to Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase:
```bash
firebase init
```

4. Build and deploy:
```bash
npm run build
firebase deploy
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email support@naijapropertymarket.com or join our Slack channel.

## 🙏 Acknowledgments

- Built to address Nigeria's housing deficit
- Powered by AI technology for better user experience
- Designed with Nigerian users in mind
