import React, { useState } from 'react';

function TextForm(props) {
  // State to hold the text
  const [text, setText] = useState('');  

  // Handler to update the text in state when typing
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Handler to convert text to uppercase
  const handleConvertToUpperCase = () => {
    setText(text.toUpperCase());
  };

  // Handler to convert text to lowercase
  const handleConvertToLowerCase = () => {
    setText(text.toLowerCase());
  };

  // Handler to clear text
  const handleClearText = () => {
    setText('');
  };

  // Handler to reverse text
  const handleTextReverse = () => {
    setText(text.split('').reverse().join(''));
  };

  // Simple Caesar cipher encryption function
  const handleEncryptText = () => {
    let encryptedText = text.split('').map((char) => 
      String.fromCharCode(char.charCodeAt(0) + 1)
    ).join('');
    setText(encryptedText);
  };

  // Simple Caesar cipher decryption function
  const handleDecryptText = () => {
    let decryptedText = text.split('').map((char) => 
      String.fromCharCode(char.charCodeAt(0) - 1)
    ).join('');
    setText(decryptedText);
  };

  // Handler to copy text to clipboard
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  return (
    <div style={{ marginTop: '60px' }}> {/* Added margin-top to shift down */}
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea 
          className="form-control" 
          id="myBox" 
          rows="8" 
          value={text} 
          onChange={handleTextChange} // Update text as user types
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleConvertToUpperCase}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleConvertToLowerCase}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleTextReverse}>Reverse Text</button>
      <button className="btn btn-primary mx-2" onClick={handleEncryptText}>Encrypt Text</button>
      <button className="btn btn-primary mx-2" onClick={handleDecryptText}>Decrypt Text</button>

      <div>
        <button className="btn btn-primary mt-3 mx-2" onClick={handleCopyText}>Copy</button>
        <button className="btn btn-primary mt-3 mx-2" onClick={handleClearText}>Clear</button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        {text.trim().split(/\s+/).filter((word) => word.length !== 0).length} words and {text.replace(/\s+/g, '').length} characters        
        <p>Estimated Reading Time: {0.008 * text.split(" ").filter((word) => word.length !== 0).length} minutes</p>

        <h2>Preview</h2>
        <p>{text || "Nothing to preview!"}</p>
      </div>
    </div>
  );
}

export default TextForm;
