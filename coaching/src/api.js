// Set VITE_API_URL in Vercel to your deployed backend URL ending in /api.
// Example: https://your-backend.onrender.com/api
const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();
export const API = (configuredApiUrl || "http://localhost:5000/api").replace(/\/$/, "");
