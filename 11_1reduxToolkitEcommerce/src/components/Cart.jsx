import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/features/cartSlice';

function Cart() {
    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeCart = (id) => {
        dispatch(removeFromCart({ id: id }));
    };

    // Calculate total price
    const totalSum = cart.reduce((acc, product) => {
        const priceValue = parseFloat(product.price.replace(/[^0-9.-]+/g, ''));
        return acc + priceValue;
    }, 0);

    return (
        <div className="bg-white h-auto min-h-96">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Your Cart
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {cart.length > 0 ? (
                        cart.map((product) => (
                            <div
                                key={product.id}
                                className="group relative flex flex-col p-3 bg-white border-gray-700 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
                            >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none lg:h-80 border-gray-500 border">
                                    <img
                                        alt={product.imageAlt}
                                        src={product.imageSrc}
                                        className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-900">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-900">{product.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        {product.price}
                                    </p>
                                </div>
                                <button
                                    onClick={() => removeCart(product.id)}
                                    className="mt-4 group-hover:opacity-75 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Remove from Cart
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">Your cart is empty.</p>
                    )}
                </div>

                {/* Total Component */}
                <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold">Total for Checkout:</h2>
                    <ol className="mt-2">
                        {cart.map((product) => (
                            <li className='flex justify-between py-1' key={product.id}>
                                <div>{product.name}</div>
                                <div>{product.price}</div>
                            </li>
                        ))}
                    </ol>
                    <hr className="my-2 border-gray-300" />
                    <div className='flex justify-between font-bold text-lg'>
                        <p>Grand Total:</p>
                        <p>${totalSum.toFixed(2)}</p> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
