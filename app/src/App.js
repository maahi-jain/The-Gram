import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Login from './Components/Login'
import SideNav from './Components/SideNav';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import useWindowSize from './CustomHooks/useWindowSize';
import BottomNav from './Components/BottomNav';
import Chat from './Components/Chat';
import Logout from './Components/Logout';
import Profile from './Components/Profile';
import CreatePost from './Components/CreatePost';
import Search from './Components/Search';

function App() {
  let desktop = 'desktop';
  let mobile = 'mobile';
  const isMobile = useWindowSize()
  const [windowState, setWindowState] = useState(isMobile ? mobile : desktop);
  const [logout, setLogout] = useState(false);
  const [createPost, setCreatePost] = useState(false);

  useEffect(() => {
    setWindowState(isMobile ? mobile : desktop)
  }, [isMobile, mobile, desktop])

  const onLogout = (open) => {
    setLogout(open);
  }

  const onCreatePost = (open) => {
    setCreatePost(open);
  }

  return (
    <Router>
      <div className="App">
        <Header />
        {isMobile ? <BottomNav onLogout={onLogout} onCreatePost={onCreatePost} /> : <SideNav onLogout={onLogout} onCreatePost={onCreatePost} />}
        <Box component="main" className={"main " + windowState}>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/chat' element={<Chat />} />
            <Route exact path='/search' element={<Search />} />
            <Route exact path='/profile' element={<Profile />} />
          </Routes>
        </Box>
        <CreatePost open={createPost} onClose={onCreatePost} />
        <Logout open={logout} onClose={onLogout} />
      </div>
    </Router>
  );
}

export default App;
