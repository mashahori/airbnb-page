
import { useState } from 'react';
import { Adder, List, Tabs } from './components';
import './App.css';
import mock from './mock/index.js';

const App = () => {
  return (
    <div className="App">
      <h2>All experiences</h2>
      <List items={mock.items} />
    </div>
  )
};

export default App;
