import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  
  const countWords = () => {
    const words = text.split(/\s+/).filter(word => word.length > 0);
    return words.length;
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
        <h1>Responsive Paragraph word counter</h1>
      <textarea
        rows="10"
        cols="40"
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <p>Word Count: {countWords()}</p>
    </div>
  );
}

export default WordCounter;