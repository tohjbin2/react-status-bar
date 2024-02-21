import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom'; ->React 18 업데이트 이후, 더 이상 사용되지 않음.
/* MEMO: React 18 업데이트 이후 createRoot를 사용하기 위해,
'react-dom' 대신 'react-dom/client'가 사용됨. */

import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import Main from './components/main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </React.StrictMode>,
);

//ReactDOM.render(<Router />, document.getElementById('root'));

// 1. React, React-Router, GlobalStyle, theme을 적용한 경우 예시 -----start
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
*/
// 1. React, React-Router, GlobalStyle, theme을 적용한 경우 예시 -----end

// 2. React-Router를 적용하지 않은 경우 예시 -----start
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
// 2. React-Router를 적용하지 않은 경우 예시 -----end
