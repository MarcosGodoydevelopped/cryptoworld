import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'antd/dist/antd.css';
import store from './app/store';

ReactDOM.render(
<BrowserRouter>
<Router>
<Provider store={store}>

    <App />
    </Provider>,
</Router>,
</BrowserRouter>
document.getElementById('root'));
