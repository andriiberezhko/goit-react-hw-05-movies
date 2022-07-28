import { CastList } from 'components/CastList/CastList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'service/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchMovieCast(id).then(setCast);
  }, [id]);

  return <CastList casts={cast} />;
};

export default Cast;
