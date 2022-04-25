import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Event } from './routes/Event';
import { Join } from './routes/Join';
import { Team } from './routes/Team';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Navigation />
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/event" element={<Event />} />
              <Route path="/team" element={<Team />} />
              <Route path="/join" element={<Join />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
