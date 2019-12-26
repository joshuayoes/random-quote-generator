import React, {useState} from 'react';
import './App.scss';
import $ from 'jquery';

function App() {
  const [quote, setQuote] = useState('Loading');
  
  const fetchQuote = async () => {
    //See GitHub for API documentation
    //https://github.com/jamesseanwright/ron-swanson-quotes

    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const json = await response.json();
    const output = json[0]
    setQuote(output);
    tweetUrl(output);
  }

  const tweetUrl = (output) => {
    const twitterUrl = 'http://twitter.com/intent/tweet/?text=';
    const tagLine = ' - Ron Swanson'
    const regex = /\s/gi;
    const tweetQuery = output
      .concat(tagLine)
      .replace(regex, '%20');

    //Update the tweet button with new quote
    $('#tweet-quote').attr("href", twitterUrl.concat(tweetQuery));
  }

  //Grabs first quote on load
  window.onload = fetchQuote;

  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">Ron Swanson</p>
      <button 
        id="new-quote" 
        onClick={fetchQuote}>
          New Quote
      </button>
      <a 
        id="tweet-quote"
        href="https://twitter.com/intent/tweet/">
        Tweet
      </a>
    </div>
  );
}

export default App;
