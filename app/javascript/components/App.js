import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Greeting from './Greeting';


class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
              <Route path='/greetings' element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </Provider> 
      );
  }
}

export default App;
