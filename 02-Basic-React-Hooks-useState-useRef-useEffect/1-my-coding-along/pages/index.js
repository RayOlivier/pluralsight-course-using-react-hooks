import React, { useState } from 'react';

const InputElement = () => {
  // const inputText = results[0];
  // const setInputText = results[1];

  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);

  return (
    <div>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter Some Text"
      />
      <br />
      {inputText}
      <ul>
        {historyList.map((x) => {
          return <div>{x}</div>;
        })}
      </ul>
    </div>
  );
};

export default InputElement;
