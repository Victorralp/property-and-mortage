import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  query, 
  where, 
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { db } from './firebase';

const MORTGAGES_COLLECTION = 'mortgages';
const APPLICATIONS_COLLECTION = 'mortgageApplications';

export const getMortgageProducts = async () => {
  try {
    const q = query(
      collection(db, MORTGAGES_COLLECTION),
      where('active', '==', true),
      orderBy('interestRate', 'asc')
    );

    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });

    return products;
  } catch (error) {
    console.error('Error getting mortgage products:', error);
    throw error;
  }
};

export const getMortgageById = async (mortgageId) => {
  try {
    const docRef = doc(db, MORTGAGES_COLLECTION, mortgageId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error('Mortgage product not found');
    }
  } catch (error) {
    console.error('Error getting mortgage product:', error);
    throw error;
  }
};

export const calculateMonthlyPayment = (principal, annualRate, years) => {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;
  
  const monthlyPayment = 
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  return {
    monthlyPayment: Math.round(monthlyPayment),
    totalPayment: Math.round(monthlyPayment * numberOfPayments),
    totalInterest: Math.round((monthlyPayment * numberOfPayments) - principal)
  };
};

export const matchMortgageProducts = async (userProfile) => {
  try {
    const products = await getMortgageProducts();
    
    // Simple matching algorithm based on user profile
    const matches = products.map(product => {
      let score = 0;
      
      // Score based on income
      if (userProfile.monthlyIncome >= product.minIncome) {
        score += 30;
      }
      
      // Score based on credit score
      if (userProfile.creditScore >= product.minCreditScore) {
        score += 25;
      }
      
      // Score based on down payment
      const downPaymentPercent = (userProfile.downPayment / userProfile.propertyPrice) * 100;
      if (downPaymentPercent >= product.minDownPayment) {
        score += 25;
      }
      
      // Score based on employment type
      if (product.eligibleEmploymentTypes.includes(userProfile.employmentType)) {
        score += 20;
      }

      return {
        ...product,
        matchScore: score,
        eligible: score >= 75
      };
    });

    // Sort by match score
    return matches.sort((a, b) => b.matchScore - a.matchScore);
  } catch (error) {
    console.error('Error matching mortgage products:', error);
    throw error;
  }
};

export const submitMortgageApplication = async (applicationData) => {
  try {
    const docRef = await addDoc(collection(db, APPLICATIONS_COLLECTION), {
      ...applicationData,
      status: 'pending',
      submittedAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return { id: docRef.id, ...applicationData };
  } catch (error) {
    console.error('Error submitting mortgage application:', error);
    throw error;
  }
};

export const getUserApplications = async (userId) => {
  try {
    const q = query(
      collection(db, APPLICATIONS_COLLECTION),
      where('userId', '==', userId),
      orderBy('submittedAt', 'desc')
    );

    const querySnapshot = await getDocs(q);
    const applications = [];
    querySnapshot.forEach((doc) => {
      applications.push({ id: doc.id, ...doc.data() });
    });

    return applications;
  } catch (error) {
    console.error('Error getting user applications:', error);
    throw error;
  }
};

export const updateApplicationStatus = async (applicationId, status, notes = '') => {
  try {
    const docRef = doc(db, APPLICATIONS_COLLECTION, applicationId);
    await updateDoc(docRef, {
      status,
      notes,
      updatedAt: Timestamp.now()
    });
    return { success: true };
  } catch (error) {
    console.error('Error updating application status:', error);
    throw error;
  }
};
