import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  startAfter,
  Timestamp 
} from 'firebase/firestore';
import { db } from './firebase';

const PROPERTIES_COLLECTION = 'properties';

export const createProperty = async (propertyData) => {
  try {
    const docRef = await addDoc(collection(db, PROPERTIES_COLLECTION), {
      ...propertyData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      views: 0,
      favorites: 0,
      status: 'active'
    });
    return { id: docRef.id, ...propertyData };
  } catch (error) {
    console.error('Error creating property:', error);
    throw error;
  }
};

export const getProperties = async (filters = {}, limitCount = 20) => {
  try {
    let q = collection(db, PROPERTIES_COLLECTION);
    const constraints = [where('status', '==', 'active')];

    // Apply filters
    if (filters.propertyType) {
      constraints.push(where('propertyType', '==', filters.propertyType));
    }
    if (filters.location) {
      constraints.push(where('location.state', '==', filters.location));
    }
    if (filters.minPrice) {
      constraints.push(where('price', '>=', filters.minPrice));
    }
    if (filters.maxPrice) {
      constraints.push(where('price', '<=', filters.maxPrice));
    }
    if (filters.bedrooms) {
      constraints.push(where('bedrooms', '>=', filters.bedrooms));
    }

    // Add ordering and limit
    constraints.push(orderBy('createdAt', 'desc'));
    constraints.push(limit(limitCount));

    q = query(q, ...constraints);

    const querySnapshot = await getDocs(q);
    const properties = [];
    querySnapshot.forEach((doc) => {
      properties.push({ id: doc.id, ...doc.data() });
    });

    return properties;
  } catch (error) {
    console.error('Error getting properties:', error);
    throw error;
  }
};

export const getPropertyById = async (propertyId) => {
  try {
    const docRef = doc(db, PROPERTIES_COLLECTION, propertyId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Increment view count
      await updateDoc(docRef, {
        views: (docSnap.data().views || 0) + 1
      });
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error('Property not found');
    }
  } catch (error) {
    console.error('Error getting property:', error);
    throw error;
  }
};

export const updateProperty = async (propertyId, updates) => {
  try {
    const docRef = doc(db, PROPERTIES_COLLECTION, propertyId);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now()
    });
    return { id: propertyId, ...updates };
  } catch (error) {
    console.error('Error updating property:', error);
    throw error;
  }
};

export const deleteProperty = async (propertyId) => {
  try {
    const docRef = doc(db, PROPERTIES_COLLECTION, propertyId);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error('Error deleting property:', error);
    throw error;
  }
};

export const getFeaturedProperties = async (limitCount = 6) => {
  try {
    const q = query(
      collection(db, PROPERTIES_COLLECTION),
      where('status', '==', 'active'),
      where('featured', '==', true),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(q);
    const properties = [];
    querySnapshot.forEach((doc) => {
      properties.push({ id: doc.id, ...doc.data() });
    });

    return properties;
  } catch (error) {
    console.error('Error getting featured properties:', error);
    throw error;
  }
};

export const searchProperties = async (searchTerm) => {
  try {
    // Note: For production, consider using Algolia or ElasticSearch for better search
    const querySnapshot = await getDocs(
      query(
        collection(db, PROPERTIES_COLLECTION),
        where('status', '==', 'active')
      )
    );

    const properties = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const searchableText = `${data.title} ${data.description} ${data.location.city} ${data.location.state}`.toLowerCase();
      
      if (searchableText.includes(searchTerm.toLowerCase())) {
        properties.push({ id: doc.id, ...data });
      }
    });

    return properties;
  } catch (error) {
    console.error('Error searching properties:', error);
    throw error;
  }
};
