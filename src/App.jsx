import React, { useState } from 'react';
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
            buttonStyle={'btn btn--primary'}
            content="Get Fact"
            isDisabled={isLoading}
          />
          <div className="app__quote">
            {isLoading ? <h3>Getting the data... </h3> : <Quote fact={fact} />}
            {isError && <Error errorMessage={errorMessage} />}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
