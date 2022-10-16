import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import YogiProvider from '../lib/components/yogi-provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <YogiProvider>
      <App />
    </YogiProvider>
  </React.StrictMode>,
);
