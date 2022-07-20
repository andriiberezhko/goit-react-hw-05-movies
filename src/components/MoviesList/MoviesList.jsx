export const MoviesList = ({ movies }) => {
  //   console.log(movies);
  return (
    <ul>
      {movies.map(movie => {
        return <li key={movie.id}>{movie.title}</li>;
      })}
    </ul>
  );
};
