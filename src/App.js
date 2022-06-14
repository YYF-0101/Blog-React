import Header from './layout/Header';
import './App.css';
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import About from './layout/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />

      </>
    </BrowserRouter>

  );
}

export default App;
