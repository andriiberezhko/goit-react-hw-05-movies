import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Conteiner';
import { Navigation } from './Navigation/Navigation';
import { NotFoundPage } from '../pages/NotFoundPage';
import { Home } from 'pages/Home';

function App() {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}

export default App;
