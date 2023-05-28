import axios from 'axios';
import jwtDecode from 'jwt-decode'; // Import the jwt-decode library

const API_URL = 'https://wysabackend.onrender.com'; // Replace with the actual API URL

// Function to make a login API request
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, { username, password });
    const { token } = response.data;
    
    // Decode the JWT token to get the username
    const decodedToken = jwtDecode(token);
    console.log(decodedToken)
    
    
    // Store the username in local storage
    localStorage.setItem('username', decodedToken.id.username);
    localStorage.setItem('photoUrl', decodedToken.id.photoUrl);

    return response.data;
  } catch (error) {
    console.log("hello from error")
    throw error;
  }
};

// Function to make a register API request
export const register = async (name, password, image) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, { username:name, password, photoUrl:image });
    const { token } = response.data;
    
    // Decode the JWT token to get the username
    const decodedToken = jwtDecode(token);
    console.log(decodedToken)
    
    localStorage.setItem('username', decodedToken.id.username);
    localStorage.setItem('photoUrl', decodedToken.id.photoUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const logout = () => {
    // Remove the username from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('photoUrl');
  
    // Redirect the user to the homepage
    window.location.href = '/';
  };