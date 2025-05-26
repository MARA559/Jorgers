import React, { useState } from 'react';
import { saveData } from '../utils/localStorage';
import EditableText from './EditableText';

function Navbar({ profile, setProfile }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const updateName = (newValue) => {
    const updatedProfile = { ...profile, name: newValue };
    setProfile(updatedProfile);
    saveData('profile', updatedProfile);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">
            <EditableText 
              value={profile.name} 
              onSave={updateName}
              className="outline-none focus:ring-2 focus:ring-blue-300 px-2 rounded"
            />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              {menuOpen ? (
                <i className="fas fa-times text-xl"></i>
              ) : (
                <i className="fas fa-bars text-xl"></i>
              )}
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-500 transition">Home</a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-500 transition">Portfolio</a>
            <a href="#about" className="text-gray-600 hover:text-blue-500 transition">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 transition">Contact</a>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="text-gray-600 hover:text-blue-500 transition py-2"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#portfolio" 
                className="text-gray-600 hover:text-blue-500 transition py-2"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </a>
              <a 
                href="#about" 
                className="text-gray-600 hover:text-blue-500 transition py-2"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-blue-500 transition py-2"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;