// authentication.js

// Function to set authentication tokens
export const setAuthentication = (token) => {
    localStorage.setItem('token', token);
  };
  
  // Function to clear authentication tokens
  export const clearAuthentication = () => {
    // Clear authentication tokens from localStorage or any other state
    localStorage.removeItem('token');
    // Additional cleanup if needed
  };
  
  // Function to check if the user is authenticated
  export const isAuthenticated = () => {
    // Check if the authentication token exists in localStorage or any other state
    const token = localStorage.getItem('token');
    return !!token; // Return true if the token exists, false otherwise
  };
  