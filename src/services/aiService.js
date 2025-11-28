import axios from 'axios';

// Mock AI service for rent prediction
// In production, this would connect to a real ML model API

export const predictFairRent = async (propertyData) => {
  try {
    // Simulate AI prediction based on property features
    const { location, propertyType, bedrooms, bathrooms, size, amenities } = propertyData;
    
    // Base rent calculation (simplified algorithm)
    let baseRent = 0;
    
    // Property type factor
    const propertyTypeFactors = {
      'apartment': 1.0,
      'house': 1.3,
      'duplex': 1.5,
      'bungalow': 1.2,
      'flat': 0.9,
      'studio': 0.7
    };
    
    // Location factor (Lagos prices as baseline)
    const locationFactors = {
      'Lagos': 1.5,
      'Abuja': 1.4,
      'Port Harcourt': 1.2,
      'Ibadan': 1.0,
      'Kano': 0.9,
      'Enugu': 1.0,
      'Kaduna': 0.9,
      'Calabar': 1.0
    };
    
    // Calculate base rent
    baseRent = (bedrooms * 50000) + (bathrooms * 20000) + (size * 100);
    
    // Apply multipliers
    const typeFactor = propertyTypeFactors[propertyType.toLowerCase()] || 1.0;
    const locationFactor = locationFactors[location.state] || 1.0;
    const amenityFactor = 1 + (amenities.length * 0.05);
    
    const predictedRent = Math.round(baseRent * typeFactor * locationFactor * amenityFactor);
    
    // Add confidence interval
    const confidence = 0.85; // 85% confidence
    const lowerBound = Math.round(predictedRent * 0.9);
    const upperBound = Math.round(predictedRent * 1.1);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      predictedRent,
      confidence,
      range: {
        lower: lowerBound,
        upper: upperBound
      },
      factors: {
        locationImpact: Math.round(locationFactor * 100),
        propertyTypeImpact: Math.round(typeFactor * 100),
        amenitiesImpact: Math.round(amenityFactor * 100)
      },
      marketComparison: {
        below: Math.random() < 0.5,
        percentage: Math.round(Math.random() * 20)
      }
    };
  } catch (error) {
    console.error('Error predicting rent:', error);
    throw error;
  }
};

export const getMarketInsights = async (location, propertyType) => {
  try {
    // Mock market insights
    // In production, this would fetch real market data
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      averageRent: Math.round(200000 + Math.random() * 500000),
      priceChange: (Math.random() * 20 - 5).toFixed(2), // -5% to +15%
      demandLevel: ['Low', 'Medium', 'High', 'Very High'][Math.floor(Math.random() * 4)],
      supplyLevel: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
      trendDirection: Math.random() > 0.5 ? 'up' : 'down',
      competitiveProperties: Math.floor(Math.random() * 50) + 10,
      averageDaysOnMarket: Math.floor(Math.random() * 60) + 15,
      recommendations: [
        'This is a high-demand area with limited supply',
        'Prices have been increasing steadily over the past 6 months',
        'Properties in this area typically rent within 30 days'
      ]
    };
  } catch (error) {
    console.error('Error getting market insights:', error);
    throw error;
  }
};

export const getPropertyRecommendations = async (userId, preferences) => {
  try {
    // Mock personalized recommendations
    // In production, this would use collaborative filtering or content-based recommendations
    
    await new Promise(resolve => setTimeout(resolve, 600));
    
    return {
      recommendations: [
        'Based on your budget, we recommend looking in Lekki Phase 1',
        'Properties with 3 bedrooms match your family size',
        'Consider properties near public transportation'
      ],
      similarUsers: {
        preferences: 'Users with similar preferences often choose properties with parking',
        averageBudget: 450000
      }
    };
  } catch (error) {
    console.error('Error getting recommendations:', error);
    throw error;
  }
};

export const analyzeMortgageAffordability = async (income, expenses, propertyPrice) => {
  try {
    // Calculate affordability metrics
    const monthlyIncome = income;
    const monthlyExpenses = expenses;
    const disposableIncome = monthlyIncome - monthlyExpenses;
    
    // 28/36 rule: Housing shouldn't exceed 28% of gross income
    const maxHousingPayment = monthlyIncome * 0.28;
    
    // Calculate max affordable property price (assuming 10% down, 15% interest, 20 years)
    const downPaymentPercent = 0.10;
    const annualRate = 0.15;
    const years = 20;
    
    const monthlyRate = annualRate / 12;
    const numberOfPayments = years * 12;
    
    // Calculate max loan amount from max payment
    const maxLoanAmount = maxHousingPayment * 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1) /
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments));
    
    const maxPropertyPrice = maxLoanAmount / (1 - downPaymentPercent);
    
    const affordable = propertyPrice <= maxPropertyPrice;
    const affordabilityScore = Math.min(100, Math.round((maxPropertyPrice / propertyPrice) * 100));
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      affordable,
      affordabilityScore,
      maxPropertyPrice: Math.round(maxPropertyPrice),
      recommendedDownPayment: Math.round(propertyPrice * downPaymentPercent),
      estimatedMonthlyPayment: Math.round((propertyPrice * (1 - downPaymentPercent) * monthlyRate * 
        Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)),
      debtToIncomeRatio: ((monthlyExpenses / monthlyIncome) * 100).toFixed(2),
      recommendations: affordable 
        ? ['This property is within your budget', 'Consider saving 20% down payment for better rates']
        : ['This property may stretch your budget', 'Consider properties under ₦' + Math.round(maxPropertyPrice).toLocaleString()]
    };
  } catch (error) {
    console.error('Error analyzing affordability:', error);
    throw error;
  }
};
