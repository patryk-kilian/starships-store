import gql from 'graphql-tag';

export const GET_STARSHIPS = gql`
  query starships {
    allStarships {
      starships {
        id
        name
        manufacturers
        costInCredits
      }
    }
  }
`;
