import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Login from './Components/Login'
import SideNav from './Components/SideNav';
import { Box, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import useWindowSize from './CustomHooks/useWindowSize';
import BottomNav from './Components/BottomNav';

function App() {
  let desktop = 'desktop';
  let mobile = 'mobile';
  const isMobile = useWindowSize()
  const [windowState, setWindowState] = useState(isMobile ? mobile : desktop);

  useEffect(() => {
    setWindowState(isMobile ? mobile : desktop)
  }, [isMobile, mobile, desktop])

  return (
    <div className="App">
      <Header />
      {isMobile ? <BottomNav /> : <SideNav />}
      <Box component="main" className={"main " + windowState}>
        <Toolbar />
        <Home />
      </Box>
      {/* <Login /> */}
    </div>
  );
}

export default App;
