import axios from 'axios';

// Base URL for API
const API_URL = 'http://localhost:5000/api/users';

// Register user function
export const registerUser = async (userData) => {
  try {
    // Send POST request to backend API
    const response = await axios.post(`${API_URL}/register`, userData);
    
    // Return the response data from the backend (could include success message, user info, etc.)
    return response.data;
  } catch (error) {
    // Log error if API call fails
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    
    // Throw error for further handling in the component
    throw new Error(error.response ? error.response.data.message : 'Registration failed');
  }
};
