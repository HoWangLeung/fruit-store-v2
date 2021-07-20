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
import { IntlProvider } from 'react-intl';
import en from './i18n/en';
import zh from './i18n/zh';

if (localStorage.getItem('locale') == null)
  localStorage.setItem('locale', navigator.language)

let locale = localStorage.getItem('locale')
console.log('locale ', locale);
let messages;
if (locale.includes('zh')) {
  messages = zh;
} else {
  messages = en;
}

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <StylesProvider injectFirst>

        <IntlProvider locale={locale} key={locale} messages={messages}   >
          <App />
        </IntlProvider>
      </StylesProvider>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
