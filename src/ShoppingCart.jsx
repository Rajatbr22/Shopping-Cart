    import React, { useState } from 'react';

    const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 10, quantity: 1 },
        { id: 2, name: 'Product 2', price: 15, quantity: 2 },
        { id: 3, name: 'Product 3', price: 20, quantity: 1 },
    ]);

    const addItemToCart = (item) => {
        const existingItem = cartItems.find(i => i.id === item.id);
        if (existingItem) {
        const updatedCart = cartItems.map(i =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
        setCartItems(updatedCart);
        } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const updateItemQuantity = (itemId, newQuantity) => {
        newQuantity = Math.max(newQuantity, 0);
    
        const updatedCart = cartItems.map(item =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        );
    
        setCartItems(updatedCart);
    };
    

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
        }, 0);
    };

    return (
        <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            {cartItems.map(item => (
                <div key={item.id} className="bg-slate-900 rounded-lg p-4 shadow-md mb-4">
                <h3 className="font-bold text-gray-100">{item.name}</h3>
                <p className='text-gray-100'>Price: ${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                    <button
                    className="bg-blue-500 text-gray-100 px-2 py-1 rounded"
                    onClick={() => addItemToCart(item)}
                    >
                    +
                    </button>
                    <button
                    className="bg-red-500 text-gray-100 px-2 py-1 rounded ml-2"
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >
                    -
                    </button>
                    <span className="mx-2 text-gray-100">Quantity: {item.quantity}</span>
                </div>
                </div>
            ))}
            </div>
            <div className="bg-slate-900 rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-100">Total Price</h3>
            <p className="text-2xl font-bold text-gray-100">${calculateTotalPrice().toFixed(2)}</p>
            </div>
        </div>
        </div>
    );
    };

    export default ShoppingCart;
