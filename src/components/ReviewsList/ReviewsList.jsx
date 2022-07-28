import PropTypes from 'prop-types';

export const ReviewsList = ({ reviews }) => {
  return (
    <div>
      {reviews.length > 0 ? (
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
      ) : (
        <p>Sorry, there are no reviews</p>
      )}
    </div>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
