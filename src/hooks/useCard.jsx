import { useContext } from 'react';
import { CardContext } from '../context/card';

export const useCard = () => {

  const context = useContext(CardContext);
  

  if(context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }


  return context;
}