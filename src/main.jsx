import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/reset.css';
import './assets/css/index.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query/queryClient';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 1. React Query */}
    <QueryClientProvider client={queryClient}>
      {/* 2. React Router */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
