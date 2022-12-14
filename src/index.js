import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals';
import { PopupProvider } from './contexts/PopupContext';
import { UserProvider } from './contexts/UserContext';
import { initialPopupState, popupReducer } from './reducers/popupReducer';
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PopupProvider
          initialPopupState={initialPopupState}
          reducer={popupReducer}
        >
          <App tab='home' />
        </PopupProvider>
      </UserProvider>
    </BrowserRouter>
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
