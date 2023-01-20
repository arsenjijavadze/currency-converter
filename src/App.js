import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Block value={0} currency="USD" onChangeCurrency={(cur) => console.log(cur)} />
      <Block value={0} currency="GBP" />
    </div>
  );
}

export default App;
