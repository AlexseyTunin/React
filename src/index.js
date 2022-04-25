import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette:{
    mode: 'dark',
    primary: {
      main: '#0000ff',
    }
  },
  status: {
    danger: orange[500],
  },
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme ={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
