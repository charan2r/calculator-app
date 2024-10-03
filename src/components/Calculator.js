import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState(''); 
  const [result, setResult] = useState(''); 

  const handleClick = (value) => {
    setInput((prev) => prev + value); 
    setResult(''); 
  };

  const clearInput = () => {
    setInput(''); 
    setResult(''); 
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(input); // eslint-disable-line no-eval
      setResult(evalResult);
      setInput(''); 
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className='bg-gray-100 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs md:max-w-lg mx-auto'>
      <h2 className="text-xl font-bold mb-4 text-center">Calculator</h2>
      
      <div className='mb-4 text-2xl bg-white p-3 rounded-md shadow-inner'>
        {result || input || '0'} 
      </div>
      
      {/* Calculator buttons */}
      <div className='grid grid-cols-4 gap-3'>
        {['7', '8', '9', '/'].map((item) => (
          <button key={item} onClick={() => handleClick(item)} className='btn'>
            {item}
          </button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleClick(item)} className='btn'>
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleClick(item)} className='btn'>
            {item}
          </button>
        ))}
        {['0', '.', '=', '+'].map((item) => (
          <button
            key={item}
            onClick={item === '=' ? calculateResult : () => handleClick(item)}
            className='btn'
          >
            {item}
          </button>
        ))}
        <button onClick={clearInput} className="col-span-4 btn bg-red-500 text-white">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
