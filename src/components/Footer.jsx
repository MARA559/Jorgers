import React from 'react';

function Footer({ contactInfo }) {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Interactive Portfolio</h2>
            <p className="text-gray-400 mt-2">
              © {year} All Rights Reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href={contactInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a 
              href={contactInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a 
              href={contactInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            Easy to use and customize portfolio website
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <a href="#home" className="text-gray-400 hover:text-white transition mb-2 md:mb-0">Home</a>
            <a href="#portfolio" className="text-gray-400 hover:text-white transition mb-2 md:mb-0">Portfolio</a>
            <a href="#about" className="text-gray-400 hover:text-white transition mb-2 md:mb-0">About</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;