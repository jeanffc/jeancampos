import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App
