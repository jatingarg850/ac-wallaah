const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const api = {
  baseUrl: API_BASE_URL,
  
  async fetch(endpoint, options = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error(`API Error (${endpoint}):`, error);
      throw error;
    }
  },

  // Helper methods for common API calls
  get(endpoint, options = {}) {
    return this.fetch(endpoint, {
      ...options,
      method: 'GET',
    });
  },

  post(endpoint, data, options = {}) {
    return this.fetch(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  put(endpoint, data, options = {}) {
    return this.fetch(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  delete(endpoint, options = {}) {
    return this.fetch(endpoint, {
      ...options,
      method: 'DELETE',
    });
  },
}; 