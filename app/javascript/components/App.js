import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';

import HelloWolrd from './HelloWorld';

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
              <Route path='/hello' element={<HelloWolrd greeting='Friend' />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
