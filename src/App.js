import { Routes, Route } from 'react-router-dom';

import Container from './components/Container/Container';
import Header from './components/Header/Header';

import Home from './pages/Home';
import About from './pages/About';
import Favorite from './pages/Favorite';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Container>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;


