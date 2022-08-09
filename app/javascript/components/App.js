import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';

import Greeting from './Greeting';


const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
              <Route path='/hello' element={<Greeting greeting='Friend' />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
