import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import EventsInList from './EventsInList';
import { Parent } from './ChildToParentProps';
import UseRef from './UseRef';
import RefDemo from './RefDemo';
import EventBubbling from './EventBubbling';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventsInList />
    <UseRef/>
    <Parent/>
    <RefDemo/>
    <EventBubbling/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
