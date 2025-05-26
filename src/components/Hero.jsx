import React from 'react';
import EditableText from './EditableText';
import ImageUploader from './ImageUploader';
import { saveData } from '../utils/localStorage';

function Hero({ profile, setProfile }) {
  const updateTitle = (newValue) => {
    const updatedProfile = { ...profile, title: newValue };
    setProfile(updatedProfile);
    saveData('profile', updatedProfile);
  };

  const updateDescription = (newValue) => {
    const updatedProfile = { ...profile, description: newValue };
    setProfile(updatedProfile);
    saveData('profile', updatedProfile);
  };

  const updatePhoto = (newPhotoUrl) => {
    const updatedProfile = { ...profile, photo: newPhotoUrl };
    setProfile(updatedProfile);
    saveData('profile', updatedProfile);
  };

  return (
    <section id="home" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hello, I'm{" "}
              <EditableText 
                value={profile.name} 
                onSave={(newName) => {
                  const updatedProfile = { ...profile, name: newName };
                  setProfile(updatedProfile);
                  saveData('profile', updatedProfile);
                }}
                className="outline-none focus:ring-2 focus:ring-blue-300 px-2 rounded"
              />
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              <EditableText 
                value={profile.title} 
                onSave={updateTitle}
                className="outline-none focus:ring-2 focus:ring-blue-300 px-2 rounded"
              />
            </h2>
            
            <div className="text-gray-600 mb-8 max-w-lg">
              <EditableText 
                value={profile.description} 
                onSave={updateDescription}
                multiline={true}
                className="outline-none focus:ring-2 focus:ring-blue-300 px-2 py-1 rounded"
              />
            </div>
            
            <div className="flex space-x-4">
              <a
                href="#portfolio"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="md:w-5/12">
            <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 mx-auto border-4 border-white shadow-lg">
              <ImageUploader 
                currentImage={profile.photo}
                onImageUpload={updatePhoto}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md cursor-pointer">
                <i className="fas fa-camera text-gray-600"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;