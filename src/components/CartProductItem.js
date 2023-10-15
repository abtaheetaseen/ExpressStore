import React from 'react'
import FormatPrice from '../helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import {FaTrash} from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'

const CartProductItem = ({id, name, image, color, price, amount}) => {

    const {removeItem, setIncrease, setDecrease} = useCartContext();

  return (
    <div className="cart-heading grid grid-five-column">

        {/* image,name,color */}
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src={image} alt={id} />
                </figure>
            </div>

            <div>
                <p>{name}</p>
                <div className="color-div">
                    <p>Color :</p>
                    <div className="color-style" style={{backgroundColor: color, color: color, marginTop: '-10px'}}>
                    </div>
                </div>
            </div>
        </div>

        {/* price */}
        <div className="cart-hide">
            <p><FormatPrice price={price}/></p>
        </div>

        {/* quantity */}
        <CartAmountToggle 
            amount = {amount}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
        />

        {/* subtotal */}
        <div className='cart-hide'>
            <p><FormatPrice price = {price * amount}/></p>
        </div>

        {/* remove */}
        <div>
            <FaTrash className='remove_icon' onClick={() => removeItem(id)}/>
        </div>
    </div>
  )
}

export default CartProductItem
