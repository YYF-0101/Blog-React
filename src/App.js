import Header from './layout/Header';
import './App.css';
import BlogDetailPage from './pages/BlogDetailPage';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import About from './layout/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import URLBlogs from './pages/URLBlogs';
import NotFound from './pages/NotFound';
import BlogPageRoute from './pages/BlogPageRoute';
import RawDataPage from './pages/RawDataPage';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/blogs/:id" element={<BlogDetailPage />} />
            <Route path="/blogs" element={<URLBlogs />} />
            <Route path="/routeblogs/*" element={<BlogPageRoute />} />
            <Route path="/about" element={<About />} />
            <Route path="/rawdata/*" element={<RawDataPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
