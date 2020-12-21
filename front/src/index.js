import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import configureStore from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react'

import { createGlobalStyle } from 'styled-components';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// const { store, persistor } = configureStore();

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}

a {
  text-decoration: none;
  color: black;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <Provider store={configureStore}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
        <GlobalStyle />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
