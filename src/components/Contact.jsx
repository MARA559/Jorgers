import React, { useState } from 'react';
import { saveData } from '../utils/localStorage';
import EditableText from './EditableText';

function Contact({ contactInfo, setContactInfo }) {
  const updateContactField = (field, value) => {
    const updatedContactInfo = { ...contactInfo, [field]: value };
    setContactInfo(updatedContactInfo);
    saveData('contactInfo', updatedContactInfo);
  };

  const updateSocialLink = (platform, value) => {
    const updatedSocial = { ...contactInfo.social, [platform]: value };
    const updatedContactInfo = { ...contactInfo, social: updatedSocial };
    setContactInfo(updatedContactInfo);
    saveData('contactInfo', updatedContactInfo);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Have a question or want to work together? Feel free to contact me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-500 text-xl mr-4 mt-1">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium mb-1">Email</h4>
                    <div className="text-gray-600">
                      <EditableText
                        value={contactInfo.email}
                        onSave={(value) => updateContactField('email', value)}
                        className="outline-none focus:ring-2 focus:ring-blue-300 px-2 rounded"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-500 text-xl mr-4 mt-1">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium mb-1">Phone</h4>
                    <div className="text-gray-600">
                      <EditableText
                        value={contactInfo.phone}
                        onSave={(value) => updateContactField('phone', value)}
                        className="outline-none focus:ring-2 focus:ring-blue-300 px-2 rounded"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-500 text-xl mr-4 mt-1">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium mb-1">Location</h4>
                    <div className="text-gray-600">
                      <EditableText
                        value={contactInfo.location}
                        onSave={(value) => updateContactField('location', value)}
                        className="outline-none focus:ring-2 focus:ring-blue-300 px-2 rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href={contactInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full hover:bg-blue-700 transition"
                  title="Facebook"
                  onClick={(e) => {
                    e.preventDefault();
                    const newUrl = prompt("Enter your Facebook profile URL:", contactInfo.social.facebook);
                    if (newUrl) updateSocialLink('facebook', newUrl);
                  }}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                
                <a 
                  href={contactInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-600 text-white flex items-center justify-center rounded-full hover:bg-pink-700 transition"
                  title="Instagram"
                  onClick={(e) => {
                    e.preventDefault();
                    const newUrl = prompt("Enter your Instagram profile URL:", contactInfo.social.instagram);
                    if (newUrl) updateSocialLink('instagram', newUrl);
                  }}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                
                <a 
                  href={contactInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full hover:bg-blue-600 transition"
                  title="LinkedIn"
                  onClick={(e) => {
                    e.preventDefault();
                    const newUrl = prompt("Enter your LinkedIn profile URL:", contactInfo.social.linkedin);
                    if (newUrl) updateSocialLink('linkedin', newUrl);
                  }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Email"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <button
                  type="button"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                  onClick={() => alert("This is a demo feature. In a real application, this would send an email to the portfolio owner.")}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;