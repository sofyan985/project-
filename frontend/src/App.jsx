import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Politics from './pages/Politics';
import Finance from './pages/Finance';
import Sports from './pages/Sports';
import Gallery from './pages/Gallery';
import Health from './pages/Health';
import Travel from './pages/Travel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/health" element={<Health />} />
            <Route path="/travel" element={<Travel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
