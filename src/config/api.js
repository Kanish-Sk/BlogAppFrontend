const API_BASE_URL = "https://chat-app-backend-j7ig.onrender.com";

const API_ENDPOINTS = () => ({
    home: `${API_BASE_URL}/home`,
    createBlog: `${API_BASE_URL}/createblog`,
    getBlog: (id) => `${API_BASE_URL}/blogs/` + id,
  });
 
export default API_ENDPOINTS;