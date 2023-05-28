import axios from 'axios';
import jwtDecode from 'jwt-decode'; 

const API_URL = 'https://wysabackend.onrender.com';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, { username, password });
    const { token } = response.data;
    
    const decodedToken = jwtDecode(token);
    console.log(decodedToken)
    
    
    localStorage.setItem('username', decodedToken.id.username);
    localStorage.setItem('photoUrl', decodedToken.id.photoUrl);

    return response.data;
  } catch (error) {
    console.log("hello from error")
    throw error;
  }
};

export const register = async (name, password, image) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, { username:name, password, photoUrl:image });
    const { token } = response.data;
    
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
    localStorage.removeItem('username');
    localStorage.removeItem('photoUrl');
  
    window.location.href = '/';
  };