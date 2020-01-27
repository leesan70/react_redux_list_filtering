import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from 'Helpers';
import { App } from 'App';
import * as serviceWorker from './serviceWorker';

const Store = configureStore({});
const StoreContext = React.createContext(null);

ReactDOM.render(
    <Provider store={Store} context={StoreContext} >
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
