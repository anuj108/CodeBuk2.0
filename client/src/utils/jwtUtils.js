import jwtDecode from 'jwt-decode';

export const decodeJWT = (token) => {
    try {
      const base64Url = token.split('.')[1]; // Get the payload part
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Convert to base64
      const payload = JSON.parse(atob(base64)); // Decode and parse
      return payload;
    } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
};
