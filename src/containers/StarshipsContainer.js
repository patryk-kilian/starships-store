import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_STARSHIPS } from '../graphql/get-starships';
import Starship from '../components/Starship';
import styled from 'styled-components/macro';

const StyledContainer = styled.ul`
  padding: 1rem;
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
`;

function StarshipsContainer() {
  const { data: { allStarships: { starships = [] } = {} } = {} } = useQuery(
    GET_STARSHIPS
  );

  return (
    <StyledContainer>
      {starships.map((starship) => (
        <Starship starship={starship} key={starship.id} />
      ))}
    </StyledContainer>
  );
}

export default StarshipsContainer;
