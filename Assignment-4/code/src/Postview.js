import InstaLogo from "./images/logo.png";
import Camera from "./images/camera.jpg";
import React, { useState, useEffect } from 'react';
import './Postview.css';
import HeartIcon from "./images/heart.png";
import OptionsIcon from "./images/select.png";
import TagIcon from "./images/tag.png"


const Postview = () => {
  const [posts, setPost] = useState([])
  const date = new Date().toDateString();

  useEffect(() => {
    fetch('http://localhost:3004/user')
    .then(response => response.json())
    .then(data => setPost(data));
      
  }, [])
  
  return (
    <div className='site-container'>
      <div className="header-part">
        <div className="logo">
          <img src={InstaLogo} alt="logo" className="logo-img"/>
          <h2 id="insta">Instaclone</h2>
        </div>
        <img src={Camera} alt="camera" className="cam-logo" />
      </div>
      <div className='post-container'>
         
        {posts.map(post => {
          return (
            <div className="post">

              <div id="post-header">
              <div className="left">
                <p><strong>{post.name}</strong></p>
                <p line-height="8px">{post.location}</p>
                </div>
                <img src={OptionsIcon} alt="" id="select" />
                </div>
              <div>
                <img src={post.PostImage} alt="" className="photos" />
              </div>
              <div className="bottom" >
              <div className="likes">
                <img src={HeartIcon} className="heart" />
                <img src={TagIcon} className="tag" />
               </div> 
               <p className="time"><strong>{date}</strong></p>
              </div>
              <div id="comments">
                <p className="nos">{post.likes} likes</p>
                <h4 className="txt">{post.description}</h4>
              </div>



            </div>
          )
        })}
      </div>
    </div>

  );

}

export default Postview;


// india