# ⚡ Quick Start Guide

Get up and running with Naija Property Marketplace in minutes!

## Prerequisites ✅

- Node.js v16+ installed
- npm or yarn
- Firebase account
- Cloudinary account

## 5-Minute Setup 🚀

### 1. Install Dependencies (1 min)
```bash
npm install
```

### 2. Environment Setup (2 min)
```bash
# Copy environment template
cp .env.example .env

# Edit .env and add your credentials
# Required: Firebase config (7 variables)
# Required: Cloudinary config (4 variables)
```

### 3. Firebase Quick Setup (1 min)
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create project → Web app
3. Copy config to `.env`
4. Enable: Authentication, Firestore, Storage

### 4. Cloudinary Quick Setup (30 sec)
1. Go to [Cloudinary](https://cloudinary.com/)
2. Dashboard → Copy Cloud Name
3. Settings → Upload → Create unsigned preset
4. Add to `.env`

### 5. Start Development Server (30 sec)
```bash
npm run dev
```

Visit: `http://localhost:3000` 🎉

## Common Commands 📝

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Production build
npm run preview      # Preview production build

# Code Quality
npm run lint         # Lint code

# Deployment
firebase login       # Login to Firebase
npm run build        # Build for production
firebase deploy      # Deploy to Firebase
```

## Project Structure 📁

```
naija-property-marketplace/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── context/        # React Context providers
│   ├── services/       # API services (Firebase, etc.)
│   ├── utils/          # Helper functions
│   └── styles/         # Global styles
├── public/             # Static assets
├── .env                # Environment variables
└── vite.config.js      # Vite configuration
```

## Essential URLs 🔗

- **Homepage**: `/`
- **Properties**: `/properties`
- **Mortgage**: `/mortgage`
- **Login**: `/login`
- **Register**: `/register`
- **Dashboard**: `/dashboard` (protected)

## Quick Test Checklist ✓

After setup, verify:
- [ ] Homepage loads
- [ ] Can search properties
- [ ] Can view property details
- [ ] Can register new account
- [ ] Can login
- [ ] Dashboard accessible
- [ ] Mortgage calculator works
- [ ] Contact form submits

## Troubleshooting 🔧

### "Firebase not configured"
→ Check `.env` file has all Firebase variables

### "Images not loading"
→ Verify Cloudinary credentials in `.env`

### "Build errors"
→ Delete `node_modules` and reinstall:
```bash
rm -rf node_modules
npm install
```

### "Port 3000 already in use"
→ Change port in `vite.config.js` or kill existing process

## Next Steps 📚

1. Read [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed setup
2. Check [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) for architecture
3. Review [CONTRIBUTING.md](CONTRIBUTING.md) to contribute
4. Explore [README.md](README.md) for features

## Need Help? 💬

- 📧 Email: support@naijapropertymarket.com
- 🐛 Issues: GitHub Issues
- 📖 Docs: Check markdown files in repo

---

**Happy Building! 🏗️**
