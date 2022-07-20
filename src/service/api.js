const API_KEY = 'f83ab619d56ba761ff69bc866a8288d9';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrend = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then(r => r.json())
    .then(data => {
      const movies = data.results.map(mov => {
        const movie = {
          id: mov.id,
          title: mov.original_title,
        };
        return movie;
      });
      return movies;
    });
};
