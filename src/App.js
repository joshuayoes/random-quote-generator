import React, {useState, useEffect} from 'react';
import './App.scss';
import $ from 'jquery';

function App() {
  const [quote, setQuote] = useState('First quote');
  
  const loadQuote = () => {
    let apiKey = process.env.PAPER_QUOTES_API_KEY;
    
    //http://paperquotes.com/api-docs/#simple-usage
    $.ajax({ 
      type : "GET", 
      url : "https://cors-anywhere.herokuapp.com/https://api.paperquotes.com/apiv1/quotes/?lang=en", 
      beforeSend: function(xhr){xhr.setRequestHeader('Authorization', `Token {${apiKey}}`);},
      success : function(result) { 
        console.log(result.results); 
        setQuote(result.results[0])
      }, 
      error : function(result) { 
        console.log(result.results);
      } 
    });
  };

  return (
    <div id="quote-box">
      <h1>Random Quote Generator</h1>
      <p id="text">{quote.quote}</p>
      <p id="author">{quote.author}</p>
      <button id="new-quote" onClick={loadQuote}>New Quote</button>
    </div>
  );
}

export default App;
