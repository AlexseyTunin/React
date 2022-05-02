import Router from './pages/Router';
import './App.css';
import React, { useState }  from 'react';
import { Provider } from 'react-redux';
import store from './store';



function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Provider store={store}>
            <Router />
          </Provider>     
      </header>
    </div>
  );
}

export default App;
