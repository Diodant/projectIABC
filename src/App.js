import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';
import './fonts/fonts.css'


function App() {
  return (
    <Router>
      <Navigation />

        <Routes>
        <Route path="/" element={<MainContent />} />
        </Routes>

      <Footer />
    </Router>
  );
}

export default App;