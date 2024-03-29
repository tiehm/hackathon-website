import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './routes/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Navigation} from './components/navigation/Navigation';
import {Event} from './routes/Event';
import {Imprint} from './routes/Imprint';
import {Join} from './routes/Join';
import {Jury} from './routes/Jury';
import {Privacy} from './routes/Privacy';
import {Result} from './routes/Result';
import {Team} from './routes/Team';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/event'} element={<Event />} />
          <Route path={'/team'} element={<Team />} />
          <Route path={'/jury'} element={<Jury />} />
          <Route path={'/result'} element={<Result />} />
          <Route path={'/join'} element={<Join />} />
          <Route path={'/impressum'} element={<Imprint />} />
          <Route path={'/datenschutz'} element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
);

