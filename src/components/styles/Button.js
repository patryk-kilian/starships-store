import styled from 'styled-components/macro';

export const Button = styled.button`
  background: var(--orangeLight);
  border: none;
  max-width: 10rem;
  width: 100%;
  color: var(--white);
  font-weight: 600;
  padding: 5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--orange);
  }
`;
