import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import thunk from "redux-thunk";
import App from './App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from "redux"
import seatReducer from './Store/Seatreducer';

const store = createStore(seatReducer, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
 
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </React.StrictMode>
  </Provider>
);


