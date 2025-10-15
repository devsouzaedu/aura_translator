import { useState } from 'react';
import './App.css';

const translations = {
  en: {
    title: '∩ura text tr∩nsl∩tor',
    subtitle: 'Replace all "A"s in your text with "∩"s',
    placeholder: 'Type your text here...',
    characters: 'characters',
    button: 'Aurify my text',
    outputTitle: 'Text ∩urified:',
    copyButton: 'Copy text',
    copied: 'Text copied!',
    shareAura: 'Download Share Aura'
  },
  pt: {
    title: '∩ura text tr∩nsl∩tor',
    subtitle: 'Troque seus "A"s no seu texto por "∩"s',
    placeholder: 'Digite seu texto aqui...',
    characters: 'caracteres',
    button: 'Aurify my text',
    outputTitle: 'Texto ∩urific∩do:',
    copyButton: 'Copiar texto',
    copied: 'Texto copiado!',
    shareAura: 'Baixe Share Aura'
  }
};

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [language, setLanguage] = useState('en');

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

  const t = translations[language];

  return (
    <div className="container">
      <div className="card">
        <div className="language-selector">
          <button 
            className={`language-button ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
            title="English"
          >
            <span className="flag-icon">🇺🇸</span>
            <span className="lang-code">EN</span>
          </button>
          <button 
            className={`language-button ${language === 'pt' ? 'active' : ''}`}
            onClick={() => setLanguage('pt')}
            title="Português"
          >
            <span className="flag-icon">🇧🇷</span>
            <span className="lang-code">BR</span>
          </button>
        </div>
        
        <h1 className="title">{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>
        
        <textarea
          className="text-input"
          placeholder={t.placeholder}
          value={inputText}
          onChange={handleInputChange}
          maxLength={300}
        />
        
        <div className="char-counter">
          {inputText.length}/300 {t.characters}
        </div>
        
        <button className="aurify-button" onClick={aurifyText}>
          {t.button}
        </button>
        
        {outputText && (
          <div className="output-section">
            <h3 className="output-title">{t.outputTitle}</h3>
            <div className="output-text">{outputText}</div>
            <button 
              className="copy-button"
              onClick={() => {
                navigator.clipboard.writeText(outputText);
                alert(t.copied);
              }}
            >
              {t.copyButton}
            </button>
          </div>
        )}
        
        <div className="footer">
          <a 
            href="https://apps.apple.com/us/app/share-aura-share-your-runs/id6742422198" 
            target="_blank" 
            rel="noopener noreferrer"
            className="aura-app-button"
          >
            {t.shareAura}
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

