// Utility function to get the correct asset path based on environment
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use the path as-is
  // In production, it will be automatically prefixed with the base path by Vite
  return `/${cleanPath}`;
};

// For background images in CSS
export const getBackgroundImageUrl = (path) => {
  return `url('${getAssetPath(path)}')`;
};
