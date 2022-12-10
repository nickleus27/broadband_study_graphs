import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './routes/About';
import Rounds from './routes/Rounds';
import Graph from './routes/Graph';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TestOptions from './routes/TestOptions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/broadband_study_graphs" element={<App />} />
      <Route path="rounds" element={<Rounds />} />
      <Route path="about" element={<About />} />
      <Route path="test_options" element={<TestOptions />} />
      <Route path="graph" element={<Graph />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
