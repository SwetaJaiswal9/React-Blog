import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreatePost from './CreatePost';
import Navbar from './Navbar';
import PostDetail from './PostDetail';
import NoPage from './NoPage';


function App() {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/post/:postId' element={<PostDetail/>} />
        <Route path='/create-post' element={<CreatePost/>} />
        <Route path='*' element={<NoPage/>} />
      </Routes>
    </div>
  );
}

export default App;
