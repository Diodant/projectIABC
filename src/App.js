
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import AboutUs from './components/AboutUs';
import MembersPage from './components/MembersPage';
import Documents from './components/Documents';
import Statute from './components/Statute';
import Awards from './components/Awards';
import StatutePage from './components/StatutePage';
import Medal from './components/Medal';
import Articles from './components/Articles/Articles';
import ArticlesPage from './components/Articles/ArticlePage';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';
import './print-styles.css';
import './fonts/fonts.css'


function App() {

  
  return (
    <Router>
      <Navigation />

        <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<MainContent />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticlesPage />} />
        <Route path="/statute" element={<Statute />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/medal" element={<Medal />} />
        <Route path="/form" element={<Form />} />
        <Route path="/statutepage" element={<StatutePage />} />
        <Route path="/contacts" element={<Contacts />} />
        </Routes>

      <Footer />
    </Router>
  );
}

export default App;
