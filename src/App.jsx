import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Error from './components/Error';
import Quote from './components/Quote';

function App() {
  const [fact, setFact] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isRTL, setIsRTL] = useState(false);

  // UseEffect watches for changes in the isRTL state and makes changes to the dom
  useEffect(() => {
    if (isRTL) {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
      return;
    }
    document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
  }, [isRTL]);

  //GetFact makes api call to the the chuck norris api and updates the state
  const getFact = () => {
    setIsError(false);
    setIsLoading(true);
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((data) => {
        setFact(data.value);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
        setErrorMessage(err);
      });
  };

  return (
    <main>
      <div className="app__image"></div>
      <div className="app__main">
        <Button
          onClick={() => setIsRTL(!isRTL)}
          buttonStyle={'btn btn--transparent app__toggleRTL'}
          content="Toggle RTL"
        />
        <div className="app__container">
          <img
            src="https://res.cloudinary.com/dnavbc7ny/image/upload/v1596279217/chuc_hjvfey.jpg"
            width="120px"
            alt="chuck norris"
            className="logo"
          />
          <Header content="Get awesome facts about Chuck Norris" />
          <Button
            onClick={() => getFact()}
            buttonStyle={'btn btn--primary app__getQuote'}
            content="Get Fact"
            isDisabled={isLoading}
          />
          <div className="app__quote">
            {isLoading ? (
              <h3 className="app__loading">Getting the data... </h3>
            ) : (
              <Quote fact={fact} />
            )}
            {isError && <Error errorMessage={errorMessage} />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
