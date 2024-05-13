import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/styles.css';
import PageHome from './components/PageHome';
import PageCurriculo from './components/PageCurriculo';
import PageSobreMim from './components/PageSobreMim';
import PagePortfolio from './components/PagePortfolio';
import PagePostPortfolio from './components/PagePostPortfolio';
import PageTutoriais from './components/PageTutoriais';
import PagePostTutoriais from './components/PagePostTutoriais';




function App() {

  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/curriculo" element={<PageCurriculo />} />
            <Route path="/portfolio" element={<PagePortfolio />} />
            <Route path="/tutoriais" element={<PageTutoriais />} />
            <Route path="/about" element={<PageSobreMim />} />
            <Route path="/portfolio/:link" exact element={<PagePostPortfolio/>} />
            <Route path="/tutoriais/:link" exact element={<PagePostTutoriais/>} />
          </Routes>
        </div>
      </Router>
    </div>

  )
}

export default App
