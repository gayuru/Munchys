import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import { createGlobalStyle } from 'styled-components'
import PublicView from './Views/PublicView';

const GlobalStyle = createGlobalStyle`
  body, html{
   font-family: 'Playfair Display', serif;
   overflow-x: hidden;
`
function App() {
  const LoadApplication = () => {
    return (
      <Switch>
        <Route path='/' component={PublicView} />
      </Switch>
    );
  }
  return (
    <div className="App">
      <GlobalStyle />
      {LoadApplication()}
    </div>
  );
}

export default App;
