import React, { useState } from 'react';

const InputElement = () => {
  const [inputText, setInputText] = useState('');
  // const inputText = results[0];
  // const setInputText = results[1];

  return (
    <div>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        placeholder="Enter Some Text"
      />
      <br />
      {inputText}
    </div>
  );
};

export default InputElement;
