import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Conteiner';
import { Navigation } from './Navigation/Navigation';
import { NotFoundPage } from '../pages/NotFoundPage';
import { Home } from 'pages/Home';
import { Movie } from 'pages/Movie';

function App() {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies">
          <Route path=":id" element={<Movie />}>
            <Route path="cast" element={<div>cast</div>} />
            <Route path="reviews" element={<div>reviews</div>} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}

export default App;
