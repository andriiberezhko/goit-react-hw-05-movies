import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'service/api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchReviews(id).then(setReviews);
  }, [id]);

  return <ReviewsList reviews={reviews} />;
};
