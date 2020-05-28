import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_STARSHIPS } from '../graphql/get-starships';
import Starship from '../components/Starship';

function StarshipsContainer() {
  const { data: { allStarships: { starships = [] } = {} } = {} } = useQuery(
    GET_STARSHIPS
  );

  return (
    <div>
      {starships &&
        starships.map((starship) => (
          <Starship starship={starship} key={starship.id} />
        ))}
    </div>
  );
}

export default StarshipsContainer;
