import { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e) => {
    const text = e.target.value;
    if (text.length <= 300) {
      setInputText(text);
    }
  };

  const aurifyText = () => {
    const converted = inputText.replace(/[aA]/g, '∩');
    setOutputText(converted);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">∩ura text tr∩nsl∩tor</h1>
        <p className="subtitle">Troque seus "A"s no seu texto por "∩"s</p>
        
        <textarea
          className="text-input"
          placeholder="Digite seu texto aqui..."
          value={inputText}
          onChange={handleInputChange}
          maxLength={300}
        />
        
        <div className="char-counter">
          {inputText.length}/300 caracteres
        </div>
        
        <button className="aurify-button" onClick={aurifyText}>
          Aurify my text
        </button>
        
        {outputText && (
          <div className="output-section">
            <h3 className="output-title">Texto ∩urific∩do:</h3>
            <div className="output-text">{outputText}</div>
            <button 
              className="copy-button"
              onClick={() => {
                navigator.clipboard.writeText(outputText);
                alert('Texto copiado!');
              }}
            >
              Copiar texto
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

