import { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from '../services/firebase';
import toast from 'react-hot-toast';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        // Fetch user profile from Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists()) {
            setUserProfile(userDoc.data());
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const register = async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile
      await updateProfile(userCredential.user, {
        displayName
      });

      // Create user document in Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        uid: userCredential.user.uid,
        email,
        displayName,
        createdAt: new Date().toISOString(),
        role: 'user',
        favorites: [],
        searches: [],
        preferences: {}
      });

      toast.success('Account created successfully!');
      return userCredential.user;
    } catch (error) {
      console.error('Registration error:', error);
      toast.error(error.message);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      toast.success('Welcome back!');
      return userCredential.user;
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Invalid email or password');
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      
      // Check if user document exists, create if not
      const userDoc = await getDoc(doc(db, 'users', result.user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', result.user.uid), {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          createdAt: new Date().toISOString(),
          role: 'user',
          favorites: [],
          searches: [],
          preferences: {}
        });
      }

      toast.success('Signed in with Google!');
      return result.user;
    } catch (error) {
      console.error('Google sign-in error:', error);
      toast.error('Failed to sign in with Google');
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUserProfile(null);
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to logout');
      throw error;
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent!');
    } catch (error) {
      console.error('Password reset error:', error);
      toast.error('Failed to send password reset email');
      throw error;
    }
  };

  const updateUserProfile = async (updates) => {
    try {
      if (user) {
        await updateDoc(doc(db, 'users', user.uid), {
          ...updates,
          updatedAt: new Date().toISOString()
        });
        setUserProfile((prev) => ({ ...prev, ...updates }));
        toast.success('Profile updated successfully!');
      }
    } catch (error) {
      console.error('Profile update error:', error);
      toast.error('Failed to update profile');
      throw error;
    }
  };

  const addToFavorites = async (propertyId) => {
    try {
      if (user && userProfile) {
        const favorites = userProfile.favorites || [];
        if (!favorites.includes(propertyId)) {
          favorites.push(propertyId);
          await updateUserProfile({ favorites });
          toast.success('Added to favorites!');
        }
      }
    } catch (error) {
      console.error('Add to favorites error:', error);
      toast.error('Failed to add to favorites');
      throw error;
    }
  };

  const removeFromFavorites = async (propertyId) => {
    try {
      if (user && userProfile) {
        const favorites = (userProfile.favorites || []).filter(id => id !== propertyId);
        await updateUserProfile({ favorites });
        toast.success('Removed from favorites!');
      }
    } catch (error) {
      console.error('Remove from favorites error:', error);
      toast.error('Failed to remove from favorites');
      throw error;
    }
  };

  const value = {
    user,
    userProfile,
    loading,
    register,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    updateUserProfile,
    addToFavorites,
    removeFromFavorites
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
