const API_KEY = 'f83ab619d56ba761ff69bc866a8288d9';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrend = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then(r => r.json())
    .then(data => {
      const movies = data.results.map(mov => {
        const movie = {
          id: mov.id,
          title: mov.title,
        };
        return movie;
      });
      return movies;
    });
};

export const fetchMovieById = id => {
  return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`)
    .then(r => r.json())
    .then(data => {
      data.genres = data.genres.flatMap(({ name }) => name).join(', ');
      return data;
    });
};

export const fetchMovieCast = id => {
  return fetch(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`)
    .then(r => r.json())
    .then(data => {
      return data.cast;
    });
};

export const fetchReviews = id => {
  return fetch(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`)
    .then(r => r.json())
    .then(data => {
      return data.results;
    });
};

export const fetchMoviesByQuery = query => {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`)
    .then(r => r.json())
    .then(data => {
      const movies = data.results.map(mov => {
        const movie = {
          id: mov.id,
          title: mov.title,
        };
        return movie;
      });
      return movies;
    });
};
