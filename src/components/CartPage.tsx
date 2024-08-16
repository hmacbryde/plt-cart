import React from 'react';
import Products from './Products';

const CartPage: React.FC = () => {

  return (
    <div className='main bg-red-200 md:w-7/10 w-full'>
      <Products />
    </div>
  );
};

export default CartPage;