import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { db } from '../firebase';

function PostDetail() {

  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {

    db
      .collection('posts')
      .doc(postId)
      .get()
      .then((snapshot) => {

        console.log('Snapshot: ', snapshot.data());
        setPost(snapshot.data());
      })
  }, [])

   console.log(post.createdAt?.seconds)

   function renderedDate(){

    let sec = post.createdAt?.seconds;
    let normalDate = new Date(sec * 1000).toLocaleString('en-GB',{timeZone:'UTC'})
    return normalDate;
   }

    return (
      <div className="post-detail">

        <h1> {post.title} </h1>
        <h4> {renderedDate()} </h4>
        <h2> {post.subTitle} </h2>
        <p> {post.content} </p>  

      </div>
    );
  }
  
  export default PostDetail;