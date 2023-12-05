import { useCard } from '../hooks/useCard';
import { AddToCartIcon, RemoveFromCartIcon } from './icons';
import './products.css';

export const Products = ( { products } ) => {

  const { addToCart, cart, removeFromCart } = useCard();


  const checkProductInCart = ( product ) => {
    return cart.some( item => item.id === product.id );
  };



  return (
    <main className='products'>
      <ul>
        {
          products.slice( 0, 10 ).map( product => {
            const isProductInCart = checkProductInCart( product );
            return (
              <li key={ product.id }>
                <img src={ product.thumbnail } alt={ product.title } />
                <div>
                  <strong>{ product.title } - ${ product.price }</strong>
                </div>
                <div>
                  <button onClick={ () => isProductInCart ? removeFromCart( product ) : addToCart( product ) } style={ {
                    backgroundColor: isProductInCart ? 'red' : '#09f'
                  } }>
                    {
                      isProductInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }

                  </button>
                </div>
              </li>
            );
          } ) }
      </ul>
    </main>
  );
};