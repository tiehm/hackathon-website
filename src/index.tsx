import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './routes/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/navigation/Navigation';
import { Event } from './routes/Event';
import { Imprint } from './routes/Imprint';
import { Join } from './routes/Join';
import { Privacy } from './routes/Privacy';
import { Team } from './routes/Team';

// TODO: Dokku does develpoment build, for god knows what reason. Find that
//  out

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Navigation />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/event" element={<Event />} />
              <Route path="/team" element={<Team />} />
              <Route path="/join" element={<Join />} />
              <Route path="/impressum" element={<Imprint />} />
              <Route path="/datenschutz" element={<Privacy />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

