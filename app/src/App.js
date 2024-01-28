import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Login from './Components/Login'
import SideNav from './Components/SideNav';
import { Box } from '@mui/material';
import { useContext, useState } from 'react';
import useWindowSize from './CustomHooks/useWindowSize';
import BottomNav from './Components/BottomNav';
import Chat from './Components/Chat';
import Logout from './Components/Logout';
import Profile from './Components/Profile';
import CreatePost from './Components/CreatePost';
import Search from './Components/Search';
import useAuthentication from './CustomHooks/useAuthentication';
import Protected from './Components/Protected';

const App = () => {
  const isMobile = useWindowSize()
  const [logoutDialog, setLogoutDialog] = useState(false);
  const [createPost, setCreatePost] = useState(false);
  const { AuthCtx } = useAuthentication();
  const { user } = useContext(AuthCtx);

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
          </Routes>
        </Box>
        <CreatePost open={createPost} onClose={onCreatePost} />
        <Logout open={logoutDialog} onClose={onLogout} />
      </div>
    </Router>
  );
}

export default App;
