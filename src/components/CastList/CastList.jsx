export const CastList = ({ casts }) => {
  return (
    <ul>
      {casts.map(item => {
        const imgUrl = `https://image.tmdb.org/t/p/w200${item.profile_path}`;
        return (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <img src={imgUrl} alt={item.name} />
            <p>Character: {item.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
