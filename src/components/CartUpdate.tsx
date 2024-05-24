import { useState } from 'react';

const CartUpdate = () => {

  const [cart, setCart] = useState([
    {id: 1, name: 'Product 1', quantity: 1 },
    {id: 2, name: 'Product 2', quantity: 1 },
    
  ]);

  const handleClick = () => {
    setCart(cart.map((item) => item.id === 1 ? { ...item, quantity: 2 } : item));
    };
  

  return (
    <div className='m-5'>
        <h1>Cart:</h1>
      <ul>
        {cart.map(item => (<li key={item.id}>{item.name} - Quantity: {item.quantity}</li>))}
      </ul>
      <button className="btn btn-primary" onClick={handleClick}>Update Quantity for Item 1</button>
    </div>
  );
};

export default CartUpdate;