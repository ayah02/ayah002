
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log("🚀 TEDx App Mounting...");

const el = document.getElementById('root');
if (el) {
  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  // Notify the parent window that we've started
  window.dispatchEvent(new Event('app-loaded'));
}
