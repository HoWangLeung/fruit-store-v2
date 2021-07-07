import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import store from './configureStore'
import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <StylesProvider injectFirst>
        <Router>

          {/* <CssBaseline /> */}
          <App />
        </Router>
      </StylesProvider>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
