import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Conteiner';
import { Navigation } from './Navigation/Navigation';
import { Home } from 'pages/Home';

const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const Movies = lazy(() => import('../pages/Movies'));
const Movie = lazy(() => import('../pages/Movie'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
