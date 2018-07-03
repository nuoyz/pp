import React from 'react';
import ReactDOM from 'react-dom';
import mitt from 'mitt'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.emitter = mitt()


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
