
export const initialState = JSON.parse( localStorage.getItem( 'cart' ) ) || [];

//TODO: Actualizar el localStorage con el estado del carrito de compras
export const updateLocalStorage = ( state ) => {
  localStorage.setItem( 'cart', JSON.stringify( state ) );
};

export const cardReducer = ( state, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case 'ADD_TO_CART': {
      const productInCartIndex = state.findIndex( item => item.id === payload.id );
      if ( productInCartIndex >= 0 ) {
        // TODO: Utilizando structuredClone
        //* Copia profunda de un arreglo
        /* const newState = structuredClone( state );
        newState[ productInCartIndex ].quantity += 1; */
        // TODO: Utilizando map
        /* const newState = state.map( item => {
          if ( item.id === payload.id ) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }
          return item;
        } ); */
        // TODO: Utilizando spread operator y slice
        const newState = [
          ...state.slice( 0, productInCartIndex ),
          { ...state[ productInCartIndex ], quantity: state[ productInCartIndex ].quantity + 1 },
          ...state.slice( productInCartIndex + 1 )
        ];
        updateLocalStorage( newState );
        return newState;
      }
      const newState = [
        ...state,
        {
          ...payload,
          quantity: 1,
        }
      ];
      updateLocalStorage( newState );
      return newState;
    }
    case 'REMOVE_FROM_CART': {
      const newState = state.filter( item => item.id !== payload.id );
      updateLocalStorage( newState );
      return newState;
    }
    case 'CLEAR_CART': {
      updateLocalStorage( [] );
      return [];
    }
  }
  return state;
};