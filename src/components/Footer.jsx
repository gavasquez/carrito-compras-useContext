import { useCard } from '../hooks/useCard';
import { useFilters } from '../hooks/useFilters';
import './Footer.css';

export function Footer() {
  const { filters } = useFilters();
  const { cart } = useCard();

  return (
    <footer className='footer'>
      <pre>
        {
          JSON.stringify( filters, null, 2 )
        }
        {
          JSON.stringify( cart, null, 2 )
        }
      </pre>
    </footer>
  );
}