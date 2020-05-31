import React, { useContext, useRef } from 'react';
import { Button } from './styles/Button';
import styled from 'styled-components/macro';
import CartContext from '../context/cart/cartContext';

const StyledForm = styled.form`
  height: 40px;
  overflow: hidden;
`;

const StyledLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid var(--orangeLight);
  max-width: 10rem;
  margin: 0 5px;
  padding: 2px 5px;
  transition: border 0.2s;
  font-weight: 600;
  font-size: 2rem;

  &:focus {
    border-bottom: 2px solid var(--orange);
  }
`;

function AddToCartForm({ starship = {} }) {
  const { costInCredits } = starship;

  const { addToCart } = useContext(CartContext);

  const inputRef = useRef(null);

  const handleAddToCartSubmit = (event) => {
    event.preventDefault();
    const amount = +inputRef.current.value;
    if (amount > 0) addToCart(starship, amount);
  };

  return (
    <StyledForm onSubmit={handleAddToCartSubmit}>
      {costInCredits && (
        <>
          <StyledLabel htmlFor='amount'>amount:</StyledLabel>
          <StyledInput
            ref={inputRef}
            id='amount'
            type='number'
            min='1'
            max='10'
          />
          <Button type='submit'>Add to cart</Button>
        </>
      )}
    </StyledForm>
  );
}

export default AddToCartForm;
