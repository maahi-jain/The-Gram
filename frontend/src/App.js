import './App.css';
import React from "react";
import Home from './components/Home';
import Header from './components/Header';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Login from './components/Login'
import SideNav from './components/SideNav';
import { Box } from '@mui/material';
import { useState } from 'react';
import useWindowSize from './customHooks/useWindowSize';
import BottomNav from './components/BottomNav';
import Chat from './components/Chat';
import Logout from './components/Logout';
import Profile from './components/Profile';
import CreatePost from './components/CreatePost';
import Search from './components/Search';
import Protected from './components/Protected';
import Signup from './components/Signup';
import { useSelector } from 'react-redux';
import { requestInterceptor, responseInterceptor } from './components/Service/axios-interceptor';

const App = () => {
  const isMobile = useWindowSize()
  const [logoutDialog, setLogoutDialog] = useState(false);
  const [createPost, setCreatePost] = useState(false);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  requestInterceptor();
  responseInterceptor();

  const onLogout = (open) => {
    setLogoutDialog(open);
  }

  const onCreatePost = (open) => {
    setCreatePost(open);
  }

  return (
    <Router>
      <div className="App">
        <Header />
        {isLoggedIn && (isMobile ? <BottomNav onLogout={onLogout} onCreatePost={onCreatePost} /> : <SideNav onLogout={onLogout} onCreatePost={onCreatePost} />)}
        <Box component="main" className={isMobile ? "main mobile" : "main desktop"}>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/home' element={<Protected><Home /></Protected>} />
            <Route exact path='/chat' element={<Protected><Chat /></Protected>} />
            <Route exact path='/search' element={<Protected><Search /></Protected>} />
            <Route exact path='/profile' element={<Protected><Profile /></Protected>} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </Box>
        <CreatePost open={createPost} onClose={onCreatePost} />
        <Logout open={logoutDialog} onClose={onLogout} />
      </div>
    </Router>
  );
}

export default App;
