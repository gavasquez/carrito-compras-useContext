import { useId, useState } from 'react';
import "./Filters.css";
import { useFilters } from '../hooks/useFilters';

export const Filters = () => {

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const { filters, setFilters } = useFilters();

  const handleChangeMinPrice = ( { target } ) => {
    setFilters( ( prevetState ) => ( {
      ...prevetState,
      minPrice: target.value
    } ) );
  };

  const handelChangeCategory = ( { target } ) => {
    setFilters( ( prevetState ) => ( {
      ...prevetState,
      category: target.value
    } ) );
  };

  return (
    <section className="filters">

      <div>
        <label
          htmlFor={ minPriceFilterId }>Precio Minimo</label>
        <input
          type='range'
          //* ide del label
          id={ minPriceFilterId }
          //* Rango
          min='0'
          max='1000'
          onChange={ handleChangeMinPrice }
        />
        <span>${ filters.minPrice }</span>
      </div>
      <div>
        <label htmlFor={ categoryFilterId }>Categoría</label>
        <select id={ categoryFilterId } onChange={ handelChangeCategory }>
          <option value='all'>Todos</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  );
};