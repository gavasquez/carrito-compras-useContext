import { useId } from 'react';
import './Card.css';
import { CartIcon, ClearCartIcon } from './icons';
import { useCard } from '../hooks/useCard';

const CartItem = ( { thumbnail, title, price, quantity, addToCart } ) => {


  return (
    <li>
      <img src={ thumbnail } alt='Iphone' />
      <div>
        <strong>{ title }</strong> - ${ price }
      </div>
      <footer>
        <small>
          Qty: { quantity }
        </small>
        <button onClick={ addToCart } style={ {
          backgroundColor: 'white'
        } }>+1</button>
      </footer>
    </li>
  );
};

export const Card = () => {

  const cartCheckboxId = useId();

  const { cart, clearCart, addToCart } = useCard();

  return (
    <>
      <label className='cart-button' htmlFor={ cartCheckboxId } >
        <CartIcon />
      </label>
      <input id={ cartCheckboxId } type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map( product => (
              <CartItem
                key={ product.id }
                addToCart={ () => addToCart( product ) }
                { ...product }
              />
            ) )
          }
        </ul>
        <button style={ {
          backgroundColor: 'white'
        } } onClick={ clearCart }>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};