import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import AboutUs from './components/AboutUs';
import MembersPage from './components/MembersPage';
import Footer from './components/Footer';
import './App.css';
import './fonts/fonts.css'


function App() {
  return (
    <Router>
      <Navigation />

        <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<MainContent />} />
        <Route path="/members" element={<MembersPage />} />
        </Routes>

      <Footer />
    </Router>
  );
}

export default App;
