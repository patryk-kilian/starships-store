import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../context/cart/cartContext';

const StyledHeader = styled.header`
  background: var(--purpleLight);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  box-shadow: var(--shadow);
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: var(--maxWidth);
  margin: 0 auto;

  h1 {
    text-transform: uppercase;
    color: var(--white);
  }
`;

const CartIconWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  p {
    font-size: 1.8rem;
    color: var(--white);
    margin-right: 5px;
    font-weight: 700;
  }

  svg {
    width: 4rem;
    height: 4rem;
    color: var(--white);
  }

  span {
    position: absolute;
    font-size: 1.3rem;
    top: -5px;
    right: -15px;
    background: var(--orangeLight);
    color: var(--white);
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;

function Header() {
  const { cartAmount } = useContext(CartContext);

  return (
    <StyledHeader>
      <HeaderWrap>
        <h1>starships store</h1>
        <CartIconWrap>
          <p>cart</p>
          <div css='position: relative'>
            <FaShoppingCart />
            <span>{cartAmount}</span>
          </div>
        </CartIconWrap>
      </HeaderWrap>
    </StyledHeader>
  );
}

export default Header;
