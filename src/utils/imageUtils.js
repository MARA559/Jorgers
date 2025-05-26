/**
 * Utility functions for handling images
 */

// Generate a unique ID for portfolio items
export const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
};

// Convert an image file to base64 string
export const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

// Create a placeholder image with initials
export const createInitialsImage = (name, size = 200) => {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  
  const context = canvas.getContext('2d');
  
  // Background color
  context.fillStyle = '#3B82F6';
  context.fillRect(0, 0, size, size);
  
  // Text settings
  const initials = name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase();
  
  context.font = `${size / 2}px Arial`;
  context.fillStyle = 'white';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(initials, size / 2, size / 2);
  
  return canvas.toDataURL('image/png');
};

// Create a placeholder profile image
export const createProfilePlaceholder = () => {
  return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2U1ZTdlYiIgLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjM1IiByPSIyMCIgZmlsbD0iI2JiYyIgLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwMCIgcj0iNTAiIGZpbGw9IiNiYmMiIC8+PC9zdmc+';
};

// Convert data URLs to Blob objects (useful for file uploads)
export const dataURLtoBlob = (dataURL) => {
  const arr = dataURL.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  
  return new Blob([u8arr], { type: mime });
};

// Compress an image to reduce file size
export const compressImage = (imageDataUrl, quality = 0.7) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageDataUrl;
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      
      const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
      resolve(compressedDataUrl);
    };
    
    img.onerror = (error) => {
      reject(error);
    };
  });
};