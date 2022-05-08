import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from '../firebase';
import styled from 'styled-components';

const Post = styled.div`
  &:hover{
    border: 2px solid #bee2ff;
  }`;

function Home() {

  const [posts, setPosts] = useState([]); 

  useEffect(() => {

    db
      .collection('posts')
      .get()
      .then((snapshot) => {
          const posts = snapshot.docs.map((doc) => {
              return{
                id: doc.id,
                ...doc.data()
              };
          });
          console.log(posts);
          setPosts(posts);
      });

  }, [])

    return (
      <div className="home">
     
      <h1> Science Blog </h1>
      <div id="blog-by"> By Sweta </div>

      {posts.map((post, index) => (

          <Post className="post" key={`post-${index}`}>
            <Link to = {`/post/${post.id}`} >
              <h3> { post.title } </h3>
            </Link>

            <p> { post.subTitle } </p>
          </Post>
    ))}

      </div>
    );
  }
  
  export default Home;