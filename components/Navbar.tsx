
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../types';
import { useData } from '../context/DataContext';

interface NavbarProps {
  lang: Language;
  toggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { siteSettings } = useData();
  const location = useLocation();

  const navItems = [
    { name: { en: 'Home', ar: 'الرئيسية' }, path: '/' },
    { name: { en: 'Speakers', ar: 'المتحدثون' }, path: '/speakers' },
    { name: { en: 'Agenda', ar: 'الجدول' }, path: '/agenda' },
    { name: { en: 'Live', ar: 'بث مباشر' }, path: '/live' },
    { name: { en: 'Registration', ar: 'التسجيل' }, path: '/registration' },
  ];

  const activePath = location.pathname;

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section - Matches TEDx YU KHOBAR image style */}
        <Link to="/" className="flex flex-col items-start leading-none group">
          <div className="flex items-baseline gap-1">
            <span className="text-ted-red font-black text-2xl tracking-tighter">TED</span>
            <span className="text-ted-red font-bold text-lg -ml-0.5 transform -translate-y-[2px]">X</span>
          </div>
          <span className="text-white font-medium text-[10px] tracking-[0.2em] uppercase mt-0.5 group-hover:text-ted-red transition-colors">
            {siteSettings.eventName.en.replace('TEDx ', '')}
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[11px] font-bold transition-all uppercase tracking-[0.15em] ${
                activePath === item.path ? 'text-ted-red' : 'text-white/60 hover:text-white'
              }`}
            >
              {item.name[lang]}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className="px-4 py-1.5 border border-white/10 rounded-full hover:bg-white/5 text-[10px] font-black uppercase tracking-widest transition-all"
          >
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 py-8 border-t border-white/5 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6 px-6 text-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-black uppercase tracking-widest ${
                  activePath === item.path ? 'text-ted-red' : 'text-white'
                }`}
              >
                {item.name[lang]}
              </Link>
            ))}
            <button
              onClick={() => { toggleLanguage(); setIsOpen(false); }}
              className="mt-4 px-6 py-3 border border-white/10 rounded-xl text-sm font-bold uppercase tracking-widest"
            >
              {lang === 'en' ? 'Switch to Arabic' : 'تغيير للغة الإنجليزية'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
