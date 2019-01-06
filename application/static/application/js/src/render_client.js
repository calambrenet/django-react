import React from 'react';
import ReactDOM from 'react-dom';
import Application from "./components/Application";

ReactDOM.hydrate(<Application/>, document.getElementById('app'));

//module.hot.accept();