import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Login from './components/Login'
import SideNav from './components/SideNav';
import { Box } from '@mui/material';
import { useContext, useState } from 'react';
import useWindowSize from './customHooks/useWindowSize';
import BottomNav from './components/BottomNav';
import Chat from './components/Chat';
import Logout from './components/Logout';
import Profile from './components/Profile';
import CreatePost from './components/CreatePost';
import Search from './components/Search';
import useAuthentication from './customHooks/useAuthentication';
import Protected from './components/Protected';
import Signup from './components/Signup';
import { useSelector } from 'react-redux';

const App = () => {
  const isMobile = useWindowSize()
  const [logoutDialog, setLogoutDialog] = useState(false);
  const [createPost, setCreatePost] = useState(false);
  const { AuthCtx } = useAuthentication();
  const user = useContext(AuthCtx);
  const u = useSelector(state => state?.user);
  console.log(u);

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
        {user && (isMobile ? <BottomNav onLogout={onLogout} onCreatePost={onCreatePost} /> : <SideNav onLogout={onLogout} onCreatePost={onCreatePost} />)}
        <Box component="main" className={isMobile ? "main mobile" : "main desktop"}>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/home' element={<Protected user={user}><Home /></Protected>} />
            <Route exact path='/chat' element={<Protected user={user}><Chat /></Protected>} />
            <Route exact path='/search' element={<Protected user={user}><Search /></Protected>} />
            <Route exact path='/profile' element={<Protected user={user}><Profile /></Protected>} />
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
