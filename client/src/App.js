import react,{ useState } from 'react';
import {Router} from '@reach/router';
import Landing from './components/Landing';
import Projects from './components/Projects';
import LogReg from './components/LogReg';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Landing path='/'/>
        <Projects path='/projects'/>
        <LogReg path='/signOn'/>
      </Router>
    </div>
  );
}

export default App;
