import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import configureStore from './redux/configureStore';

import { createGlobalStyle } from 'styled-components';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

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
    <BrowserRouter> {/* ReactRouter의 기능 */}
      <Provider store={configureStore}> {/* Redux의 상태관리 기능으로 데이터들을 App 하위 컴포넌트에서 접근 할 수 있도록 해준다. */}
          <App />
        <GlobalStyle />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
