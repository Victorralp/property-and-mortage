# 📁 Naija Property Marketplace - File Structure

This document provides a complete overview of the project file structure and organization.

## 📊 Project Statistics

- **Total Source Files**: 30+ JavaScript/JSX files
- **Components**: 11 files
- **Pages**: 10 files
- **Services**: 5 files
- **Context Providers**: 2 files
- **Utilities**: 2 files
- **Configuration Files**: 10+
- **Documentation Files**: 6 markdown files

## 🗂️ Complete Directory Structure

```
naija-property-marketplace/
│
├── 📄 Configuration Files
│   ├── .env.example              # Environment variables template
│   ├── .eslintrc.cjs            # ESLint configuration
│   ├── .gitignore               # Git ignore rules
│   ├── package.json             # Dependencies and scripts
│   ├── postcss.config.js        # PostCSS configuration
│   ├── tailwind.config.js       # Tailwind CSS configuration
│   ├── vite.config.js           # Vite build configuration
│   ├── firebase.json            # Firebase hosting config
│   ├── firestore.rules          # Firestore security rules
│   ├── firestore.indexes.json   # Firestore indexes
│   └── storage.rules            # Firebase storage rules
│
├── 📚 Documentation
│   ├── README.md                # Main project documentation
│   ├── SETUP_GUIDE.md           # Detailed setup instructions
│   ├── PROJECT_SUMMARY.md       # Complete project overview
│   ├── QUICK_START.md           # 5-minute quick start
│   ├── CONTRIBUTING.md          # Contribution guidelines
│   ├── LICENSE                  # MIT License
│   └── FILE_STRUCTURE.md        # This file
│
├── 🔧 Scripts
│   └── setup.sh                 # Automated setup script
│
├── 🌐 Public Assets
│   ├── index.html              # Main HTML template
│   └── favicon.svg             # Site favicon
│
└── 💻 Source Code (src/)
    │
    ├── 🎨 Styles
    │   └── styles/
    │       └── index.css        # Global styles & Tailwind
    │
    ├── 🧩 Components
    │   ├── common/              # Reusable components
    │   │   ├── Navbar.jsx       # Main navigation
    │   │   ├── Footer.jsx       # Site footer
    │   │   ├── Loader.jsx       # Loading spinner
    │   │   ├── ProtectedRoute.jsx  # Auth route guard
    │   │   └── ScrollToTop.jsx  # Scroll restoration
    │   │
    │   └── home/                # Homepage components
    │       ├── Hero.jsx         # Hero section with search
    │       ├── Features.jsx     # Features showcase
    │       ├── FeaturedProperties.jsx  # Property cards
    │       └── HowItWorks.jsx   # Process explanation
    │
    ├── 📄 Pages
    │   ├── Home.jsx             # Homepage (/)
    │   ├── Properties.jsx       # Property listings (/properties)
    │   ├── PropertyDetail.jsx   # Property details (/properties/:id)
    │   ├── Mortgage.jsx         # Mortgage services (/mortgage)
    │   ├── Contact.jsx          # Contact page (/contact)
    │   ├── Login.jsx            # Login page (/login)
    │   ├── Register.jsx         # Registration (/register)
    │   ├── UserDashboard.jsx    # User dashboard (/dashboard)
    │   ├── Analytics.jsx        # Analytics dashboard (/analytics)
    │   └── NotFound.jsx         # 404 page
    │
    ├── 🔌 Services
    │   ├── firebase.js          # Firebase initialization
    │   ├── cloudinary.js        # Cloudinary configuration
    │   ├── propertyService.js   # Property CRUD operations
    │   ├── mortgageService.js   # Mortgage operations
    │   └── aiService.js         # AI prediction services
    │
    ├── 🌍 Context
    │   ├── AuthContext.jsx      # Authentication state
    │   └── AppContext.jsx       # Application state
    │
    ├── 🛠️ Utils
    │   ├── constants.js         # App constants
    │   └── helpers.js           # Helper functions
    │
    ├── App.jsx                  # Main App component
    └── main.jsx                 # Application entry point
```

## 📦 Key Files Explained

### Root Level

#### Configuration Files

**`.env.example`**
- Template for environment variables
- Contains placeholders for Firebase and Cloudinary credentials
- Must be copied to `.env` and filled with actual values

**`package.json`**
- Project metadata and dependencies
- NPM scripts for development, build, and deployment
- Includes React, Firebase, Cloudinary, Tailwind CSS, etc.

**`vite.config.js`**
- Vite bundler configuration
- Server settings (port 3000)
- Build output directory (`dist`)

**`tailwind.config.js`**
- Custom color palette (primary green, secondary red, accent orange)
- Custom fonts (Inter, Poppins)
- Custom animations (fade-in, slide-up, slide-down)
- Extended theme configuration

**`firebase.json`**
- Firebase Hosting configuration
- Rewrites for SPA routing
- Cache control headers

**`firestore.rules`**
- Security rules for Firestore database
- Role-based access control
- User authentication checks

**`firestore.indexes.json`**
- Composite indexes for complex queries
- Improves query performance

#### Documentation Files

**`README.md`**
- Project overview
- Features list
- Tech stack
- Quick installation guide

**`SETUP_GUIDE.md`** (10,512 bytes)
- Comprehensive setup instructions
- Firebase configuration steps
- Cloudinary setup
- Database schema
- Security rules setup
- Deployment instructions

**`PROJECT_SUMMARY.md`** (13,184 bytes)
- Complete project architecture
- Detailed feature descriptions
- Data models
- AI algorithms
- Design system
- Future enhancements

**`QUICK_START.md`**
- 5-minute setup guide
- Essential commands
- Troubleshooting tips
- Quick checklist

**`CONTRIBUTING.md`**
- Contribution guidelines
- Code standards
- Pull request process
- Commit message format

### Source Code (src/)

#### Main Files

**`main.jsx`**
- React application entry point
- Wraps app with providers (Router, Helmet, Auth, App Context)
- Imports global styles

**`App.jsx`**
- Main component with routing
- Route definitions
- Protected route wrappers
- Toast notifications setup

#### Components

**Common Components** (`src/components/common/`)

1. **`Navbar.jsx`** (~150 lines)
   - Responsive navigation
   - Mobile hamburger menu
   - User authentication dropdown
   - Logo and navigation links

2. **`Footer.jsx`** (~120 lines)
   - Multi-column footer layout
   - Quick links, resources, legal
   - Contact information
   - Social media links

3. **`Loader.jsx`** (~30 lines)
   - Loading spinner component
   - Full-screen and inline variants
   - Configurable sizes

4. **`ProtectedRoute.jsx`** (~20 lines)
   - Route authentication guard
   - Redirects to login if not authenticated
   - Shows loader during auth check

5. **`ScrollToTop.jsx`** (~15 lines)
   - Scrolls to top on route change
   - Improves navigation UX

**Home Components** (`src/components/home/`)

1. **`Hero.jsx`** (~90 lines)
   - Eye-catching hero section
   - Property search bar with filters
   - Quick statistics
   - Background patterns

2. **`Features.jsx`** (~70 lines)
   - 6 feature cards with icons
   - Responsive grid layout
   - Staggered animations

3. **`FeaturedProperties.jsx`** (~150 lines)
   - Grid of featured property cards
   - Image display with favorite button
   - Property details and pricing
   - Link to full listings

4. **`HowItWorks.jsx`** (~80 lines)
   - 4-step process explanation
   - Icon-based layout
   - Connection lines between steps

#### Pages

**`Home.jsx`** (~50 lines)
- Combines all homepage components
- SEO meta tags
- Call-to-action section

**`Properties.jsx`** (~200 lines)
- Property listing page
- Sidebar filters (type, location, price, bedrooms)
- Grid/list view toggle
- Property cards with details
- Dynamic filtering

**`PropertyDetail.jsx`** (~250 lines)
- Image gallery with thumbnails
- Full property information
- AI rent prediction display
- Agent contact card
- Share and favorite buttons
- Apply for mortgage CTA

**`Mortgage.jsx`** (~200 lines)
- Mortgage product listings
- Interactive calculator (sticky sidebar)
- Real-time payment calculations
- Product comparison
- Apply buttons

**`Contact.jsx`** (~180 lines)
- Contact form with validation
- Contact information cards
- FAQ section with 5 common questions
- Social media links

**`Login.jsx`** (~150 lines)
- Email/password login form
- Google OAuth integration
- Show/hide password toggle
- Remember me checkbox
- Forgot password link

**`Register.jsx`** (~170 lines)
- User registration form
- Password confirmation
- Terms of service checkbox
- Google sign-up option

**`UserDashboard.jsx`** (~120 lines)
- Tab-based navigation
- Overview with statistics
- Favorites management
- Application tracking
- Profile editing
- Settings

**`Analytics.jsx`** (~80 lines)
- Market statistics display
- Premium features teaser
- Upgrade prompt

**`NotFound.jsx`** (~40 lines)
- 404 error page
- Back to home button
- User-friendly message

#### Services

**`firebase.js`** (~30 lines)
- Firebase initialization
- Auth, Firestore, Storage exports
- Google Auth provider

**`cloudinary.js`** (~50 lines)
- Cloudinary configuration
- Image upload function
- URL optimization helpers

**`propertyService.js`** (~200 lines)
- CRUD operations for properties
- Property search and filtering
- Featured properties query
- View count tracking

**`mortgageService.js`** (~150 lines)
- Mortgage product queries
- Payment calculation
- Matching algorithm
- Application submission
- Application tracking

**`aiService.js`** (~200 lines)
- Rent prediction algorithm
- Market insights generator
- Affordability analysis
- Recommendation engine
- (Mock implementations ready for real ML)

#### Context

**`AuthContext.jsx`** (~150 lines)
- User authentication state
- Login/logout functions
- Registration
- Google OAuth
- Profile updates
- Favorites management

**`AppContext.jsx`** (~100 lines)
- Application global state
- Search filters
- View mode preferences
- Sort options
- Helper functions (formatCurrency, formatDate)
- Nigerian states and property types

#### Utils

**`constants.js`** (~200 lines)
- Nigerian states array (36)
- Property types
- Amenities list
- Mortgage types
- Employment types
- Price ranges
- User roles
- Chart colors
- Nigerian banks list
- Contact information

**`helpers.js`** (~300 lines)
- Currency formatting
- Number formatting
- Date formatting
- Text truncation
- Email validation
- Phone validation
- Slug generation
- Mortgage calculation
- Debounce/throttle
- Array manipulation
- Object utilities
- 25+ helper functions

## 📏 File Size Summary

### Large Files (>5KB)
- SETUP_GUIDE.md: 10,512 bytes
- PROJECT_SUMMARY.md: 13,184 bytes
- README.md: 6,528 bytes

### Medium Files (2-5KB)
- helpers.js: ~8KB
- PropertyDetail.jsx: ~8KB
- Properties.jsx: ~7KB
- Mortgage.jsx: ~6KB
- Contact.jsx: ~5KB

### Component Files
- Average component size: 2-4KB
- Total lines of code: ~5,000+ lines

## 🎯 Import/Export Patterns

### Pages Import Pattern
```javascript
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import ComponentA from '../components/...';
```

### Service Export Pattern
```javascript
export const functionName = async () => { /* ... */ };
export default service;
```

### Component Export Pattern
```javascript
const ComponentName = () => { /* ... */ };
export default ComponentName;
```

## 🔄 Data Flow

```
User Action
    ↓
React Component
    ↓
Context (Auth/App)
    ↓
Service Layer (Firebase/Cloudinary)
    ↓
Firebase/External API
    ↓
Update Context State
    ↓
Re-render Components
```

## 🚀 Build Output

After `npm run build`, the `dist/` folder contains:
- Optimized JavaScript bundles
- Minified CSS
- Static assets
- index.html with injected scripts

## 📊 Code Statistics

- **Total Lines**: ~5,000+
- **JavaScript/JSX**: 30 files
- **CSS**: 1 file (with Tailwind)
- **Config**: 10 files
- **Docs**: 6 files
- **Tests**: Ready for implementation

## 🎨 Asset Organization

```
public/
├── favicon.svg          # Site icon
├── og-image.jpg        # Social media preview (to be added)
└── assets/             # Additional assets
    ├── images/         # Static images
    └── icons/          # Icon files
```

## 🔐 Sensitive Files (Not in Git)

- `.env` - Environment variables (created from .env.example)
- `node_modules/` - Dependencies
- `dist/` - Build output
- `.firebase/` - Firebase cache
- Various debug logs

## 📦 Generated at Runtime

- `node_modules/` - After `npm install`
- `dist/` - After `npm run build`
- `.vite/` - Vite cache
- Various lock files

## 🎓 File Naming Conventions

- **Components**: PascalCase (e.g., `PropertyCard.jsx`)
- **Services**: camelCase (e.g., `propertyService.js`)
- **Utils**: camelCase (e.g., `helpers.js`)
- **Constants**: UPPER_SNAKE_CASE for exports
- **Config**: kebab-case or standard names

## 📋 Checklist for Adding New Features

When adding new features, you may need to create/modify:

- [ ] Component file in appropriate directory
- [ ] Service function if API interaction needed
- [ ] Context provider if global state needed
- [ ] Utility functions if reusable logic needed
- [ ] Constants if new fixed values needed
- [ ] Page component if new route needed
- [ ] Route definition in App.jsx
- [ ] Update README.md with new feature
- [ ] Add tests for new functionality

---

**Last Updated**: November 2024
**Maintained By**: Naija Property Marketplace Team
