import React from 'react';
import { Block } from './Block';
import './index.scss';





function App() {

  const [from, setFrom] = React.useState('USD');
  const [to, setTo] = React.useState('EUR');
  const [fromPrice, setFromPrice] = React.useState(0);
  const [toPrice, setToPrice] = React.useState(0);


  const onChangeFromPrice = (value) => {
    setFromPrice(value);
  }

  const onChangeToPrice = (value) => {
    setToPrice(value);
  }

  const getCurrency = (amount, from, to,) => {
    var requestURL = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
      var response = request.response;
      setToPrice(+(amount * response.result).toFixed(2));

    }
  }

  getCurrency(fromPrice, from, to);


  return (
    <div className="App">
      <Block
        value={fromPrice}
        currency={from}
        onChangeCurrency={setFrom}
        onChangeValue={onChangeFromPrice}
        type={'number'}
      />
      <Block
        value={toPrice}
        currency={to}
        onChangeCurrency={setTo}
        onChangeValue={onChangeToPrice}
        type={'text'}
      />
    </div>
  );
}

export default App;
