import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { loadData } from './utils/localStorage';

function App() {
  const [profile, setProfile] = useState(() => loadData('profile', {
    name: 'Your Name',
    title: 'Professional Title',
    description: 'Click to edit this description. Tell visitors about yourself and what you do.',
    photo: '/assets/images/profile-placeholder.jpg'
  }));
  
  const [aboutData, setAboutData] = useState(() => loadData('about', {
    title: 'About Me',
    content: 'Click to edit this section. Share your story, experience, and background.'
  }));
  
  const [portfolioItems, setPortfolioItems] = useState(() => 
    loadData('portfolioItems', [])
  );

  const [contactInfo, setContactInfo] = useState(() => loadData('contactInfo', {
    email: 'your.email@example.com',
    phone: '+1 234 567 890',
    location: 'City, Country',
    social: {
      facebook: 'https://facebook.com/',
      instagram: 'https://instagram.com/',
      linkedin: 'https://linkedin.com/'
    }
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar profile={profile} setProfile={setProfile} />
      <main>
        <Hero profile={profile} setProfile={setProfile} />
        <Portfolio 
          portfolioItems={portfolioItems} 
          setPortfolioItems={setPortfolioItems} 
        />
        <About aboutData={aboutData} setAboutData={setAboutData} />
        <Contact contactInfo={contactInfo} setContactInfo={setContactInfo} />
      </main>
      <Footer contactInfo={contactInfo} />
    </div>
  );
}

export default App;