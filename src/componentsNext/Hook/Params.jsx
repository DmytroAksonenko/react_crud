import React from 'react';
import {
  useParams
} from 'react-router-dom';

const Params = () => {
  const matchParams = useParams();
  console.log('matchParams', matchParams);
  return (
    <div>
      example
    </div>
  )
};

export default Params;
