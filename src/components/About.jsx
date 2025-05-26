import React from 'react';
import EditableText from './EditableText';
import { saveData } from '../utils/localStorage';

function About({ aboutData, setAboutData }) {
  const updateTitle = (newValue) => {
    const updatedAboutData = { ...aboutData, title: newValue };
    setAboutData(updatedAboutData);
    saveData('about', updatedAboutData);
  };

  const updateContent = (newValue) => {
    const updatedAboutData = { ...aboutData, content: newValue };
    setAboutData(updatedAboutData);
    saveData('about', updatedAboutData);
  };

  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <EditableText 
                value={aboutData.title} 
                onSave={updateTitle}
                className="outline-none focus:ring-2 focus:ring-blue-300 px-2 rounded text-center"
              />
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <EditableText 
              value={aboutData.content} 
              onSave={updateContent}
              multiline={true}
              className="outline-none focus:ring-2 focus:ring-blue-300 p-3 rounded block w-full min-h-[200px]"
            />
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-full md:w-[30%]">
              <div className="text-blue-500 text-3xl mb-3">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                <EditableText
                  value="Development"
                  onSave={(newValue) => {
                    const updatedAboutData = {
                      ...aboutData,
                      skill1: { ...aboutData.skill1, title: newValue }
                    };
                    setAboutData(updatedAboutData);
                    saveData('about', updatedAboutData);
                  }}
                  className="outline-none focus:ring-2 focus:ring-blue-300 px-2 rounded text-center"
                />
              </h3>
              <p className="text-gray-600">
                <EditableText
                  value="Click to edit this text. Describe your development skills."
                  onSave={(newValue) => {
                    const updatedAboutData = {
                      ...aboutData,
                      skill1: { ...aboutData.skill1, description: newValue }
                    };
                    setAboutData(updatedAboutData);
                    saveData('about', updatedAboutData);
                  }}
                  multiline={true}
                  className="outline-none focus:ring-2 focus:ring-blue-300 px-2 rounded"
                />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center w-full md:w-[30%]">
              <div className="text-blue-500 text-3xl mb-3">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                <EditableText
                  value="Design"
                  onSave={(newValue) => {
                    const updatedAboutData = {
                      ...aboutData,
                      skill2: { ...aboutData.skill2, title: newValue }
                    };
                    setAboutData(updatedAboutData);
                    saveData('about', updatedAboutData);
                  }}
                  className="outline-none focus:ring-2 focus:ring-blue-300 px-2 rounded text-center"
                />
              </h3>
              <p className="text-gray-600">
                <EditableText
                  value="Click to edit this text. Describe your design skills."
                  onSave={(newValue) => {
                    const updatedAboutData = {
                      ...aboutData,
                      skill2: { ...aboutData.skill2, description: newValue }
                    };
                    setAboutData(updatedAboutData);
                    saveData('about', updatedAboutData);
                  }}
                  multiline={true}
                  className="outline-none focus:ring-2 focus:ring-blue-300 px-2 rounded"
                />
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center w-full md:w-[30%]">
              <div className="text-blue-500 text-3xl mb-3">
                <i className="fas fa-camera"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                <EditableText
                  value="Photography"
                  onSave={(newValue) => {
                    const updatedAboutData = {
                      ...aboutData,
                      skill3: { ...aboutData.skill3, title: newValue }
                    };
                    setAboutData(updatedAboutData);
                    saveData('about', updatedAboutData);
                  }}
                  className="outline-none focus:ring-2 focus:ring-blue-300 px-2 rounded text-center"
                />
              </h3>
              <p className="text-gray-600">
                <EditableText
                  value="Click to edit this text. Describe your photography skills."
                  onSave={(newValue) => {
                    const updatedAboutData = {
                      ...aboutData,
                      skill3: { ...aboutData.skill3, description: newValue }
                    };
                    setAboutData(updatedAboutData);
                    saveData('about', updatedAboutData);
                  }}
                  multiline={true}
                  className="outline-none focus:ring-2 focus:ring-blue-300 px-2 rounded"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;