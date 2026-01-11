
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
}
