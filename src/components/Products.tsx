import React from 'react';
import useCart from '../hooks/useCart';

const Products: React.FC = () => {
    const { data: cartItems, error, isLoading, handleUpdateItemQty } = useCart();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 border-t-loader-blue animate-spin-custom"></div>
          </div>
        );
      }
    
      if (error) {
        return <div className="text-center text-red-500 mt-4">Error loading cart items</div>;
      }

    return (
        <main>
        {cartItems?.length ? (
          cartItems.map((item) => (
            <div key={item.product.id} className="pb-8 p-4 flex flex-start bg-white justify-evenly border-b-4">
                <div className='grid-item'>
                    <img src={item.product.img} alt="Product Image" className="product-img mx-auto mt-0 ml-0 w-40 mr-2" />
                </div>

                <div className='grid-item ml-2 w-[250px] m-auto'>
                    <h2>Product</h2>
                    <h3 className="text-s font-bold">{item.product.name}</h3>
                </div>

                <div className='grid-item ml-2 w-[90px] m-auto'>
                    <h2>Price</h2>
                    <p className="text-s font-bold">£{item.product.price.toFixed(2)}</p>
                </div>

                <div className="flex items-center qty-buttons flex-col-reverse justify-evenly">
                    <button
                    onClick={() => handleUpdateItemQty(item.product.id, item.qty - 1)}
                    className="bg-black text-white px-3 py-1 rounded md:ml-4 md:mr-2 ml-0 mr-0">
                    -
                    </button>
                    <p>{item.qty}</p>
                    <button
                    onClick={() => handleUpdateItemQty(item.product.id, item.qty + 1)}
                    className="bg-green-500 text-white px-3 py-1 rounded ml-2 mr-2">
                    +
                    </button>

                    <button
                    onClick={() => handleUpdateItemQty(item.product.id, 0)}
                    className="bg-gray-500 text-white px-3 py-1 rounded">
                    x
                    </button>
                </div>
            </div>
          ))
        ) : (
            <div className="text-center mt-8">
                <p className="text-lg">Your cart is empty.</p>
            </div>
        )}
      </main>
    )
};

export default Products;