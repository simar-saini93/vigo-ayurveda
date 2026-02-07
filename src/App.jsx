import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Tablets from './pages/Tablets';
import Capsules from './pages/Capsules';
import Liquids from './pages/Liquids';
import ProteinPowder from './pages/ProteinPowder';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-product" element={<Products />} />
            <Route path="/tablet" element={<Tablets />} />
            <Route path="/capsules" element={<Capsules />} />
            <Route path="/liquid" element={<Liquids />} />
            <Route path="/protein-powder" element={<ProteinPowder />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/certifcates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
