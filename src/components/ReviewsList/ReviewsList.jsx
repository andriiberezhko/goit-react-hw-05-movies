export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(item => {
        return (
          <li key={item.id}>
            <h2>Author: {item.author}</h2>
            <p>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
