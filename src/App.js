import React from 'react';
import { Block } from './Block';
import './index.scss';

const getCurrency = (from, to) => {
  var requestURL = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function () {
    var response = request.response;
    console.log(response.result);
  }
}



function App() {

  const [rates, setRates] = React.useState({});

  getCurrency('USD', 'EUR');


  return (
    <div className="App">
      <Block value={0} currency="USD" />
      <Block value={0} currency="EUR" />
    </div>
  );
}

export default App;
