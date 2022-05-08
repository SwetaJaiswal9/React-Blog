import { useState } from "react";
import {db} from '../firebase';
import {useFormInput} from '../hooks';

function CreatePost() {

  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  function handleSubmit(e){
    e.preventDefault();

    console.log("Title: ", title.value);
    console.log("Sub Title: ", subTitle.value);
    console.log("Content: ", content.value);

    db.collection('posts').add({
      title:  title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date()
    });

    title.onChange(null)
    
    subTitle.onChange(null)
    
    content.onChange(null)

    window.alert("Blog post added successfully!!");
  }

  return (
    <div className="create-post">
           <h1> Create Post </h1>

     <form onSubmit={handleSubmit}>

        <div className="form-field">
          <label> Title </label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label> Sub Title </label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label> Content </label>
          <textarea {...content}> </textarea>
        </div>

        <button className="create-post-btn"> Create Post </button>


     </form>

    </div>
  );
}

export default CreatePost;