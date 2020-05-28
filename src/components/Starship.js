import React from 'react';
import styled from 'styled-components/macro';

const Name = styled.p`
  font-size: 3rem;
`;

function Starship({ starship }) {
  return (
    <div>
      <Name>{starship.name}</Name>
      <ul>
        {starship.manufacturers.map((manufacturer) => (
          <li>{manufacturer}</li>
        ))}
      </ul>
      <p>{starship.costInCredits}</p>
    </div>
  );
}

export default Starship;
