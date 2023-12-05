import { useReducer } from 'react';
import { createContext } from 'react';
import { cardReducer, initialState } from '../reducers/card';

export const CardContext = createContext();

export const CardProvider = ( { children } ) => {

  const [ state, dispatch ] = useReducer( cardReducer, initialState );

  const addToCart = ( product ) =>
    dispatch( {
      type: 'ADD_TO_CART',
      payload: product
    } );
  ;
  const removeFromCart = ( product ) =>
    dispatch( {
      type: 'REMOVE_FROM_CART',
      payload: product
    } );

  const clearCart = () =>
    dispatch( {
      type: 'CLEAR_CART'
    } );
  ;
  //TODO otra forma sin reducer
  /* const [ cart, setCart ] = useState( [] );
  const addToCart = ( product ) => {
    const productInCartIndex = cart.findIndex( item => item.id === product.id );
    console.log( productInCartIndex );
    if ( productInCartIndex >= 0 ) {
      //* Copia profunda de un arreglo
      const newCart = structuredClone( cart );
      newCart[ productInCartIndex ].quantity += 1;
      return setCart( newCart );
    }
    //* producto no esta en el carrito
    setCart( prevState => ( [
      ...prevState,
      {
        ...product,
        quantity: 1,
      }
    ] ) );
  };
  const clearCart = () => {
    setCart( [] );
  };
  const removeFromCart = ( product ) => {
    setCart( prevState => prevState.filter( item => item.id !== product.id ) );
  }; */

  return (
    <CardContext.Provider value={ { cart: state, addToCart, clearCart, removeFromCart } }>
      { children }
    </CardContext.Provider>
  );
};