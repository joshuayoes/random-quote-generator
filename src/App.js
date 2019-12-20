import React, {useState, useEffect} from 'react';
import './App.scss';
import $ from 'jquery';

function App() {
  useEffect(() => {
    let apiKey = process.env.PAPER_QUOTES_API_KEY;
    $.ajax({ 
      type : "GET", 
      url : "https://cors-anywhere.herokuapp.com/https://api.paperquotes.com/apiv1/quotes/?lang=en", 
      beforeSend: function(xhr){xhr.setRequestHeader('Authorization', `Token {${apiKey}}`);},
      success : function(result) { 
          console.log(result.results); 
      }, 
      error : function(result) { 
          console.log(result.results);
      } 
    }); 
  });

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
    </div>
  );
}

export default App;
