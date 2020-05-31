import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { FaTrashAlt } from 'react-icons/fa';
import CartContext from '../context/cart/cartContext';
import AddToCartForm from './AddToCartForm';

const StyledStarship = styled.li`
  border-radius: 5px;
  box-shadow: var(--shadow);
  }
`;

const PriceWrap = styled.div`
  margin-bottom: 1rem;
  p {
    font-size: 2.2rem;
    font-weight: 700;
  }
`;

const OutOfStock = styled.p`
  background: var(--greyDark);
  color: var(--white);
  text-transform: uppercase;
  text-align: center;
`;

const StarshipCardHeader = styled.div`
  background: var(--purple);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 2rem;
`;

const StarshipCardBody = styled.div`
  padding: 2rem;
`;

const Name = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--white);
  text-transform: uppercase;
`;

const Manufacturers = styled.div`
  p {
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  ul {
    margin-bottom: 1rem;
    height: 9rem;
    overflow: hidden;
  }

  li {
    font-size: 1.4rem;
    border-bottom: 1px solid var(--greyLight);
    padding: 5px 0;
  }
`;

const AmountInfo = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2rem;
  overflow: hidden;

  p {
    font-size: 1.4rem;
    color: var(--orange);
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 1.5rem;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--orange);

    span {
      margin-right: 5px;
    }
  }
`;

function Starship({ starship = {} }) {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const { name, manufacturers, costInCredits, id } = starship;

  const cartStarship = cartItems.find((el) => el.id === id);

  return (
    <StyledStarship>
      <StarshipCardHeader>
        <Name>{name}</Name>
      </StarshipCardHeader>
      <StarshipCardBody>
        <Manufacturers>
          <p>Manufacturers</p>
          <ul>
            {manufacturers.map((manufacturer, index) => (
              <li key={index}>{manufacturer}</li>
            ))}
          </ul>
        </Manufacturers>
        <PriceWrap>
          {costInCredits ? (
            <p>{costInCredits} credits</p>
          ) : (
            <OutOfStock>out of stock</OutOfStock>
          )}
        </PriceWrap>
        <AddToCartForm starship={starship} />
        <AmountInfo>
          {cartStarship && (
            <>
              <p>Already {cartStarship.amount} in cart</p>
              <button onClick={() => removeFromCart(id)}>
                <span>remove</span> <FaTrashAlt />
              </button>
            </>
          )}
        </AmountInfo>
      </StarshipCardBody>
    </StyledStarship>
  );
}

export default Starship;
