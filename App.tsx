
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Language } from './types';
import { DataProvider } from './context/DataContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutTEDx from './pages/AboutTEDx';
import AboutTED from './pages/AboutTED';
import Speakers from './pages/Speakers';
import Teams from './pages/Teams';
import Agenda from './pages/Agenda';
import Registration from './pages/Registration';
import LiveStream from './pages/LiveStream';
import FAQPage from './pages/FAQPage';
import University from './pages/University';
import Admin from './pages/Admin';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <DataProvider>
      <Router>
        <div className={`min-h-screen flex flex-col ${lang === 'ar' ? 'font-arabic' : ''}`}>
          <Navbar lang={lang} toggleLanguage={toggleLanguage} />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home lang={lang} />} />
              <Route path="/about-tedx" element={<AboutTEDx lang={lang} />} />
              <Route path="/about-ted" element={<AboutTED lang={lang} />} />
              <Route path="/speakers" element={<Speakers lang={lang} />} />
              <Route path="/teams" element={<Teams lang={lang} />} />
              <Route path="/agenda" element={<Agenda lang={lang} />} />
              <Route path="/registration" element={<Registration lang={lang} />} />
              <Route path="/live" element={<LiveStream lang={lang} />} />
              <Route path="/faq" element={<FAQPage lang={lang} />} />
              <Route path="/university" element={<University lang={lang} />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>

          <Footer lang={lang} />
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
