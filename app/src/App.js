import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Login from './Components/Login'
import SideNav from './Components/SideNav';
import { Box, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import useWindowSize from './CustomHooks/useWindowSize';
import BottomNav from './Components/BottomNav';
import Chat from './Components/Chat';
import Logout from './Components/Logout';
import MyProfile from './Components/MyProfile';
import CreatePost from './Components/CreatePost';
import Search from './Components/Search';

function App() {
  let desktop = 'desktop';
  let mobile = 'mobile';
  const isMobile = useWindowSize()
  const [windowState, setWindowState] = useState(isMobile ? mobile : desktop);

  useEffect(() => {
    setWindowState(isMobile ? mobile : desktop)
  }, [isMobile, mobile, desktop])

  return (
    <Router>
      <div className="App">
        <Header />
        {isMobile ? <BottomNav /> : <SideNav />}
        <Box component="main" className={"main " + windowState}>
          <Toolbar />
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/chat' element={<Chat />} />
            <Route exact path='/search' element={<Search />} />
            <Route exact path='/create' element={<CreatePost />} />
            <Route exact path='/myProfile' element={<MyProfile />} />
            <Route exact path='/logout' element={<Logout />} />
          </Routes>
        </Box>
      </div>
    </Router>
  );
}

export default App;
