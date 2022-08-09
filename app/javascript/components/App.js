import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloWolrd from './HelloWorld';

class App extends React.Component {
  render () {
    return (
     <BrowserRouter>
        <Routes>
            <Route path='/hello' element={<HelloWolrd greeting='Friend' />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
