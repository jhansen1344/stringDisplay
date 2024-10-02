import React from 'react';
import logo from './logo.svg';
import './App.css';
import StringToListContainer from './components/StringToListContainer';

function App() {
  return (
    <StringToListContainer inputString={"(id, name, email, type(id, name, customFields(c1, c2, c3)), externalId)"} />
  );
}

export default App;
