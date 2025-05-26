import React, { useRef, useState } from 'react';
import { convertToBase64 } from '../utils/imageUtils';

function ImageUploader({ currentImage, onImageUpload, className }) {
  const fileInputRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const handleClick = () => {
    fileInputRef.current.click();
  };
  
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      // Check file type
      if (!file.type.match('image.*')) {
        alert('Please select an image file');
        return;
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }
      
      const base64 = await convertToBase64(file);
      onImageUpload(base64);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    }
  };
  
  return (
    <div 
      className={`relative cursor-pointer ${className || ''}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {currentImage ? (
        <img 
          src={currentImage} 
          alt="Uploaded content" 
          className={className || 'w-full h-full object-cover'}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <i className="fas fa-image text-3xl text-gray-400"></i>
        </div>
      )}
      
      {isHovering && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center">
            <i className="fas fa-camera text-2xl mb-2"></i>
            <p>Click to change image</p>
          </div>
        </div>
      )}
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}

export default ImageUploader;