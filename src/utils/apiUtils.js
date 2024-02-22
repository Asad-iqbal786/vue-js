// src/utils/apiUtils.js

export const getBaseUrl = () => {
    // Add logic to determine the base URL based on the environment
    // You can use process.env.NODE_ENV or other methods to check the environment
    const isProduction = process.env.NODE_ENV === 'production';
  
    // Set your production and development URLs accordingly
    const productionUrl = 'https://your-production-api-url';
    const developmentUrl = 'http://127.0.0.1:8000';
  
    return isProduction ? productionUrl : developmentUrl;
  };
  