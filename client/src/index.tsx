import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' // Accessing the store making available for nested components
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk' // Allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 
import reducers from './reducers/Index'


import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

