import React, { useState } from 'react';
import EditableText from './EditableText';
import ImageUploader from './ImageUploader';
import { saveData } from '../utils/localStorage';

function PortfolioItem({ item, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [hover, setHover] = useState(false);
  
  const updateItemField = (field, value) => {
    const updatedItem = { ...item, [field]: value };
    onUpdate(updatedItem);
  };
  
  const handleTagsChange = (tagsString) => {
    const tagArray = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);
    updateItemField('tags', tagArray);
  };
  
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative h-64">
        <ImageUploader 
          currentImage={item.image}
          onImageUpload={(imageUrl) => updateItemField('image', imageUrl)}
          className="w-full h-full object-cover"
        />
        
        {hover && !isEditing && (
          <div className="absolute bottom-0 right-0 p-3 flex space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
              className="w-10 h-10 bg-white text-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
            >
              <i className="fas fa-edit"></i>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (window.confirm('Are you sure you want to delete this portfolio item?')) {
                  onDelete(item.id);
                }
              }}
              className="w-10 h-10 bg-white text-red-500 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        )}
      </div>
      
      <div className="p-6">
        {isEditing ? (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => updateItemField('title', e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Description</label>
              <textarea
                value={item.description}
                onChange={(e) => updateItemField('description', e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="3"
              ></textarea>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-1">Tags (comma separated)</label>
              <input
                type="text"
                value={item.tags.join(', ')}
                onChange={(e) => handleTagsChange(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition"
              >
                Done
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              <EditableText
                value={item.title}
                onSave={(value) => updateItemField('title', value)}
                className="outline-none focus:ring-2 focus:ring-blue-300 px-1 rounded"
              />
            </h3>
            
            <div className="text-gray-600 mb-4">
              <EditableText
                value={item.description}
                onSave={(value) => updateItemField('description', value)}
                multiline={true}
                className="outline-none focus:ring-2 focus:ring-blue-300 px-1 rounded"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PortfolioItem;