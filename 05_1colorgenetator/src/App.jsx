import React, { useState, useRef } from 'react';
import './App.css';
import Checkbox from './components/Checkbox';

function App() {
  const [colorCode, setColorCode] = useState("#000000");
    // useRef hook
    const colorRef = useRef(null)


  const handleChange = (e) => {
    const hexValue = '#' + ('00000' + parseInt(e.target.value, 10).toString(16)).slice(-6);
    // parsing target value to decimal number and then again to string of hexadecimal 
    // Adding 00000 to hex string(which can be 1 digit) as hex code should be of 6 digits always
    // slicing the string from back of 6 digits and adding "#" at last to make it hexcode  


    setColorCode(hexValue);
  };

  const changeBgColor = (e) => {
    colorRef.current.style.backgroundColor = colorCode;
  }

  return (
    <>
      <div 
      className='w-full h-screen flex justify-center rounded-3xl text-white' 
      
      ref={colorRef}>
        <div className='w-full max-w-md h-72 shadow-md bg-blue-950 rounded-xl mx-auto px-4 py-3 my-8'>
          <h1 className='text-white text-center my-3'>Color Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
              type="text"
              value={colorCode}
              className='outline-none w-full py-1 px-3 text-black'
              readOnly
            />
            <button
              className='outline-none text-white px-3 py-1 shrink-0'
              style={{ backgroundColor: colorCode }}
              onClick={changeBgColor}
            >
              Add
            </button>
          </div>
          <input 
            type="range"
            min={0}
            max={16777215} 
            value={parseInt(colorCode.substring(1), 16)}
            // parsing the range value into hexadecimal number by removing first letter which would be "#"
            onChange={handleChange}
          /> <br /> Color : {colorCode} <br />
          <Checkbox 
            name="HEXCode" 
            id="colorStyle" 
          />
        </div>
      </div>
    </>
  );
}

export default App;
