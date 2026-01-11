
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Language } from './types.ts';
import { DataProvider } from './context/DataContext.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

// Pages
import Home from './pages/Home.tsx';
import AboutTEDx from './pages/AboutTEDx.tsx';
import AboutTED from './pages/AboutTED.tsx';
import Speakers from './pages/Speakers.tsx';
import Teams from './pages/Teams.tsx';
import Agenda from './pages/Agenda.tsx';
import Registration from './pages/Registration.tsx';
import LiveStream from './pages/LiveStream.tsx';
import FAQPage from './pages/FAQPage.tsx';
import University from './pages/University.tsx';
import Admin from './pages/Admin.tsx';

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
