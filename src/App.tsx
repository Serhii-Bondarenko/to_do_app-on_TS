import React, {FC} from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import {Layout} from './components';

const App:FC = () => {
  return (
      <Routes>
        <Route path={'/'} element={<Layout/>}/>
      </Routes>
  );
};

export default App;
