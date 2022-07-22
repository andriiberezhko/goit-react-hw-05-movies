import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Conteiner';
import { Navigation } from './Navigation/Navigation';
import { NotFoundPage } from '../pages/NotFoundPage';
import { Home } from 'pages/Home';
import { Movie } from 'pages/Movie';
import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';
import { Movies } from 'pages/Movies';

function App() {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}

export default App;
