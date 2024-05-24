import { useState } from 'react';

const Exercise1 = () => {

  const [name, setName] = useState('David');

  const handleClick = () => {
    setName('Aaron');
  };

  return (
    <div className='m-5'>
      <h1>{name}</h1>
      <button className='btn btn-primary' onClick={handleClick}>Update Name</button>
    </div>
  );
};

export default Exercise1;