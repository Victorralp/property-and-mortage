# Naija Property Marketplace - Setup Guide

## 🚀 Quick Start Guide

This guide will help you set up and run the Naija Property Marketplace application locally.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16.0.0 or higher)
- npm or yarn
- Git
- A Firebase account
- A Cloudinary account

## Step 1: Clone the Repository

```bash
git clone <repository-url>
cd naija-property-marketplace
```

## Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React 18
- React Router v6
- Firebase SDK
- Cloudinary React
- Tailwind CSS
- And other dependencies

## Step 3: Environment Setup

### Create Environment File

Copy the example environment file:
```bash
cp .env.example .env
```

### Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable the following Firebase services:
   - **Authentication**: Enable Email/Password and Google providers
   - **Firestore Database**: Create a database in production mode
   - **Storage**: Enable for image uploads

4. Get your Firebase configuration:
   - Go to Project Settings > General
   - Scroll down to "Your apps" section
   - Click on the web app icon (</>)
   - Copy the config object

5. Update your `.env` file with Firebase credentials:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Configure Cloudinary

1. Go to [Cloudinary](https://cloudinary.com/) and sign up/login
2. Go to Dashboard
3. Copy your Cloud Name, API Key, and API Secret
4. Create an unsigned upload preset:
   - Go to Settings > Upload
   - Scroll to "Upload presets"
   - Click "Add upload preset"
   - Set "Signing Mode" to "Unsigned"
   - Save the preset name

5. Update your `.env` file:
```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_API_KEY=your_api_key
VITE_CLOUDINARY_API_SECRET=your_api_secret
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

## Step 4: Firestore Database Structure

Set up your Firestore database with the following collections:

### Collections Structure

#### 1. `users` Collection
```javascript
{
  uid: string,
  email: string,
  displayName: string,
  photoURL: string (optional),
  role: "user" | "agent" | "investor" | "admin",
  favorites: array of property IDs,
  searches: array of search objects,
  preferences: object,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

#### 2. `properties` Collection
```javascript
{
  title: string,
  description: string,
  location: {
    state: string,
    city: string,
    address: string,
    coordinates: { lat: number, lng: number }
  },
  price: number,
  propertyType: string,
  bedrooms: number,
  bathrooms: number,
  size: number (in sqm),
  images: array of strings (URLs),
  amenities: array of strings,
  status: "active" | "sold" | "rented",
  featured: boolean,
  views: number,
  favorites: number,
  yearBuilt: number,
  parkingSpaces: number,
  furnished: boolean,
  agent: {
    name: string,
    phone: string,
    email: string,
    photo: string
  },
  createdAt: timestamp,
  updatedAt: timestamp
}
```

#### 3. `mortgages` Collection
```javascript
{
  name: string,
  bank: string,
  interestRate: number,
  maxTerm: number (years),
  minDownPayment: number (percentage),
  maxLoanAmount: number,
  minIncome: number,
  minCreditScore: number,
  eligibleEmploymentTypes: array of strings,
  features: array of strings,
  eligibility: array of strings,
  active: boolean,
  createdAt: timestamp
}
```

#### 4. `mortgageApplications` Collection
```javascript
{
  userId: string,
  mortgageId: string,
  propertyId: string (optional),
  applicantInfo: {
    fullName: string,
    email: string,
    phone: string,
    monthlyIncome: number,
    employmentType: string,
    employerName: string
  },
  loanDetails: {
    amount: number,
    downPayment: number,
    term: number
  },
  status: "pending" | "under_review" | "approved" | "rejected",
  notes: string,
  submittedAt: timestamp,
  updatedAt: timestamp
}
```

### Firestore Security Rules

Add these security rules to your Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    }
    
    // Properties collection
    match /properties/{propertyId} {
      allow read: if true;
      allow write: if request.auth != null && 
                      (get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['agent', 'admin']);
    }
    
    // Mortgages collection
    match /mortgages/{mortgageId} {
      allow read: if true;
      allow write: if request.auth != null && 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Mortgage applications
    match /mortgageApplications/{applicationId} {
      allow read: if request.auth != null && 
                     (resource.data.userId == request.auth.uid || 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['agent', 'admin']);
      allow create: if request.auth != null;
      allow update: if request.auth != null && 
                       (resource.data.userId == request.auth.uid || 
                        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ['agent', 'admin']);
    }
  }
}
```

## Step 5: Seed Sample Data (Optional)

To test the application, you can add sample data to Firestore:

### Sample Property Document
```javascript
{
  title: "3 Bedroom Apartment in Lekki",
  description: "Beautiful modern apartment with excellent amenities",
  location: {
    state: "Lagos",
    city: "Lekki",
    address: "Lekki Phase 1",
    coordinates: { lat: 6.4541, lng: 3.4697 }
  },
  price: 2500000,
  propertyType: "Apartment",
  bedrooms: 3,
  bathrooms: 2,
  size: 120,
  images: [
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
  ],
  amenities: ["Parking", "Security", "Swimming Pool"],
  status: "active",
  featured: true,
  views: 0,
  favorites: 0,
  yearBuilt: 2020,
  parkingSpaces: 2,
  furnished: true,
  agent: {
    name: "John Doe",
    phone: "+234 800 000 0000",
    email: "john@example.com",
    photo: "https://ui-avatars.com/api/?name=John+Doe"
  },
  createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  updatedAt: firebase.firestore.FieldValue.serverTimestamp()
}
```

### Sample Mortgage Product
```javascript
{
  name: "Standard Mortgage",
  bank: "Access Bank",
  interestRate: 15,
  maxTerm: 20,
  minDownPayment: 10,
  maxLoanAmount: 50000000,
  minIncome: 200000,
  minCreditScore: 650,
  eligibleEmploymentTypes: ["Employed", "Self-Employed", "Business Owner"],
  features: [
    "Flexible repayment",
    "No hidden fees",
    "Quick approval"
  ],
  eligibility: [
    "Minimum income: ₦200,000/month",
    "Valid employment",
    "Good credit score"
  ],
  active: true,
  createdAt: firebase.firestore.FieldValue.serverTimestamp()
}
```

## Step 6: Run the Development Server

```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Step 7: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Step 8: Preview Production Build

```bash
npm run preview
```

## Deployment

### Deploy to Firebase Hosting

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
Select:
- Hosting
- Use existing project
- Public directory: `dist`
- Single-page app: Yes
- GitHub integration: Optional

4. Build and deploy:
```bash
npm run build
firebase deploy
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Follow the prompts to complete deployment.

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify dashboard
   OR
3. Connect your GitHub repository to Netlify

## Troubleshooting

### Common Issues

**Issue: Firebase Authentication not working**
- Ensure you've enabled Email/Password and Google authentication in Firebase Console
- Check that your Firebase config is correct in `.env`

**Issue: Images not uploading to Cloudinary**
- Verify your Cloudinary credentials
- Ensure the upload preset is set to "unsigned"

**Issue: Build errors**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

**Issue: Firestore permissions denied**
- Check your Firestore security rules
- Ensure user is authenticated before accessing protected data

## Additional Configuration

### Google Maps Integration (Optional)

If you want to add map functionality:

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the Maps JavaScript API
3. Add to `.env`:
```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key
```

### Email Configuration (Optional)

For email notifications, you can integrate with services like:
- SendGrid
- Mailgun
- AWS SES

Add appropriate environment variables and implement in the backend.

## Features Overview

### Implemented Features
✅ User Authentication (Email/Password, Google)
✅ Property Listings with Filters
✅ Property Detail Pages
✅ AI Rent Prediction (Mock implementation)
✅ Mortgage Calculator
✅ Mortgage Product Listing
✅ User Dashboard
✅ Favorites System
✅ Contact Form
✅ Responsive Design
✅ SEO Optimization
✅ Mobile-First Approach

### Features for Future Enhancement
- Real AI/ML integration for rent prediction
- Payment gateway integration
- Advanced analytics dashboard
- Real-time chat with agents
- Virtual property tours
- Property comparison tool
- Saved searches with notifications
- Admin panel
- Review and rating system

## Support

For issues or questions:
- Email: support@naijapropertymarket.com
- Documentation: Check README.md
- GitHub Issues: Create an issue in the repository

## License

MIT License - See LICENSE file for details
