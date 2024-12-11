
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Setting from './components/setting/Setting'
import { useState } from 'react';

function App() {

  const [toggleSideBar, setToggleSideBar] = useState(false)

  return (
    <div>
        <Routes>
          <Route path='/' 
            element={
              <Dashboard 
                toggleSideBar={toggleSideBar} 
                setToggleSideBar={setToggleSideBar}
              />
            }
          />

          <Route path='/setting' 
            element={
              <Setting 
                toggleSideBar={toggleSideBar} 
                setToggleSideBar={setToggleSideBar}
              />
            }
          />
        </Routes>
    </div>
  );
}

export default App;
