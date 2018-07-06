import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();