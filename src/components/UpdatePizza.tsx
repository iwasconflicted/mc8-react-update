import { useState } from 'react';


const UpdatePizza = () => {
  const [toppings, setToppings] = useState(['Sausage', 'Onions', 'Mushrooms', 'Pepperoni']);

  const handleAddTopping = () => {
    setToppings([...toppings, 'Cheese']);
  };

  return (
    <div className='m-5' >
      <h1>Pizza Toppings:</h1>
      <ul>
        {toppings.map((topping, index) => (<li key={index}>{topping}</li>))}
      </ul>
      <button className='btn btn-primary' onClick={handleAddTopping}>Add Cheese</button>
    </div>
  );
}

export default UpdatePizza;