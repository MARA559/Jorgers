import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem';
import ImageUploader from './ImageUploader';
import { saveData } from '../utils/localStorage';
import { generateUniqueId } from '../utils/imageUtils';

function Portfolio({ portfolioItems, setPortfolioItems }) {
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newItem, setNewItem] = useState({
    id: '',
    title: 'New Project',
    description: 'Project description',
    image: '',
    tags: ['tag1', 'tag2']
  });

  const handleAddNewItem = () => {
    if (!newItem.image) {
      alert("Please upload an image for your new portfolio item");
      return;
    }
    
    const itemWithId = {
      ...newItem,
      id: generateUniqueId()
    };
    
    const updatedItems = [...portfolioItems, itemWithId];
    setPortfolioItems(updatedItems);
    saveData('portfolioItems', updatedItems);
    
    // Reset form
    setNewItem({
      id: '',
      title: 'New Project',
      description: 'Project description',
      image: '',
      tags: ['tag1', 'tag2']
    });
    
    setIsAddingNew(false);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = portfolioItems.filter(item => item.id !== itemId);
    setPortfolioItems(updatedItems);
    saveData('portfolioItems', updatedItems);
  };

  const handleUpdateItem = (updatedItem) => {
    const updatedItems = portfolioItems.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    );
    setPortfolioItems(updatedItems);
    saveData('portfolioItems', updatedItems);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Portfolio</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            A showcase of my projects and creations. Click on any item to view more details.
          </p>
        </div>

        {portfolioItems.length === 0 && !isAddingNew && (
          <div className="text-center py-10">
            <p className="text-gray-500 mb-6">Your portfolio is empty. Add your first project!</p>
            <button
              onClick={() => setIsAddingNew(true)}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              <i className="fas fa-plus mr-2"></i> Add Portfolio Item
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map(item => (
            <PortfolioItem
              key={item.id}
              item={item}
              onUpdate={handleUpdateItem}
              onDelete={handleDeleteItem}
            />
          ))}
        </div>

        {portfolioItems.length > 0 && !isAddingNew && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsAddingNew(true)}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              <i className="fas fa-plus mr-2"></i> Add Portfolio Item
            </button>
          </div>
        )}

        {isAddingNew && (
          <div className="mt-12 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Add New Portfolio Item</h3>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Project Image</label>
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-2 overflow-hidden">
                <ImageUploader
                  currentImage={newItem.image}
                  onImageUpload={(imageUrl) => setNewItem({...newItem, image: imageUrl})}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-500">Click to upload a project image</p>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Project Title</label>
              <input
                type="text"
                value={newItem.title}
                onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Project Description</label>
              <textarea
                value={newItem.description}
                onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="3"
              ></textarea>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Tags (comma separated)</label>
              <input
                type="text"
                value={newItem.tags.join(', ')}
                onChange={(e) => setNewItem({
                  ...newItem, 
                  tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag)
                })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsAddingNew(false)}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddNewItem}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Item
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;