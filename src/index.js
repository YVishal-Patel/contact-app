import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import {createStore} from 'redux'
// import ContactReducer from './Components/Redux/ContactReducer';
import { ContactReducer } from './Components/Redux/ContactReducer';
import { Provider } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import { composeWithDevTools } from 'redux-devtools-extension';

 const store = createStore(ContactReducer, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);
