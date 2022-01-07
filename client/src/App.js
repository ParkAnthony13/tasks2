import react,{ useState } from 'react';
import {Router} from '@reach/router';
import Landing from './components/Landing';
import Projects from './components/Projects';
import LogReg from './components/LogReg';
import GlobalState from './contexts/GlobalState';
import './App.css';
import QuestLog from './components/QuestLog';
import Test from './components/Test';

function App() {
  const [state, setState] = useState({
    mobButton:true
  });

  return (
    <GlobalState.Provider value={[state, setState]}>
      <div>
        <Router>
          <Landing path='/'/>
          <Projects path='/projects'/>
          <LogReg path='/signOn'/>
          <QuestLog path='/questLog'/>
          <Test path='/test'/>
        </Router>
      </div>
    </GlobalState.Provider>
  );
}

export default App;
