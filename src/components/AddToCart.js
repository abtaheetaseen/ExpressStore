import React, { useState } from 'react'
import styled from 'styled-components';
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
// import { Button } from "../styles/Button";

const AddToCart = ({product}) => {

  const {addToCart} = useCartContext();

    const {id, colors, stock} = product;

    const [color, setColor] = useState(colors[0]);

    const [amount, setAmount] = useState(1);

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
    
  return (
    <Wrapper>
        <div className="colors">
            <p>
                Colors:
                {colors.map((curColor, index) => {
                    return <button onClick={() => setColor(curColor)} key={index} style={{backgroundColor : curColor}} className={color === curColor ? 'btnStyle active' : 'btnStyle'}>{color === curColor ? <FaCheck className='checkStyle'/> : null}</button>
                })}
            </p>
        </div>

        {/* add to cart */}
        <CartAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} />

        <NavLink to='/cart' onClick={() =>
          addToCart(id, color, amount, product)}>
            {/* this product is from single product, i pass singlr product to addtocart as product */}
                {/* <Button className='btn'>Add To Cart</Button> */}
                <button className='add-to-cart-btn'>Add To Cart</button>
        </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  

  .add-to-cart-btn{
    padding: 6px 30px;
    border-radius: 14px;
    font-weight: 700;
    background-color: rgb(33 16 16);
    color: #ffdc1d;
    cursor: pointer;
    opacity: 1;
    border: none;

    &:hover{
        background: transparent;
        border: 1px solid black;
        color: black;
    }
}

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2rem;
      color: goldenrod;
      background-color: black;
      padding: 3px 4px;
      margin-top: -11px;
    }
  }
`;

export default AddToCart
