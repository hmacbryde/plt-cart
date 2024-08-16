import React from 'react';
import useCart from '../hooks/useCart';
import bag from '../img/shopping-bag.svg';

const TotalPrice: React.FC = () => {

  const { data: cartItems } = useCart();

  // Calculate the total count of items in the cart
  const totalCount = cartItems?.reduce((sum, item) => sum + item.qty, 0) || 0;
  const totalPrice = cartItems?.reduce((sum, item) => sum + item.qty * item.product.price, 0) || 0;

  return (
    <div className='total-price md:w-3/10 w-full bg-red-200 flex md:flex-col flex-row items-center justify-center p-4 fixed bottom-0 md:bottom-auto md:h-screen md:right-0'>
        <div className='bag-icon relative top-[10px]'>
        <img src={bag} alt="Shopping Bag" className="mx-auto mt-0 ml-0 md:w-[45px] w-[38px]" />
          <p className='total-figure md:top-[-28px] relative font-bold text-center top-[-26px] m-auto'>{totalCount}</p>
        </div>
        <div className="md:text-2xl font-bold text-center text-white cart-text text-base w-[135px] leading-22px">
            Cart Total: £{totalPrice.toFixed(2)}
        </div>
        <div className='checkout-button text-center md:mt-4 mt-0'>
          <button className='bg-black p-4 text-white rounded-md font-bold md:w-[200px] w-[140px] tracking-widest'>CHECKOUT</button>
        </div>
    </div>
  );
};

export default TotalPrice;