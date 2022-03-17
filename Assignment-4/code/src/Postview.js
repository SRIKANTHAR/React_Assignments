import React, { useState } from "react";
import axios from "axios";
import "./Postview.css";

import Camera from "./assets/images/camera.png";

const Postview = () => {
  const [posts, setPost] = useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3004/user").then((res) => {
      setPost(res.data);
    });
  }, []);

  return (
    <div className="site-container">
      <div class="nav-bar">
        <div className="logo">
          <h2 className="insta">Instaclone</h2>
        </div>
        <div>
          <img src={Camera} alt="" className="camera" />
        </div>
      </div>
      <div className="post-container">
        {posts.map((post) => {
          return (
            <section className="main">
              <div className="wrapper">
                <div className="post">
                  <div className="info">
                    <div className="user">
                      <div className="profile-pic">
                        <img src={post.profile} alt="img" />
                      </div>

                      <p className="username ">{post.name}</p>
                    </div>
                    <img
                      src="img/option.PNG"
                      className="options"
                      alt="options"
                    />
                  </div>
                  <p className="location">{post.location}</p>
                  <img
                    src={post.PostImage}
                    className="post-image"
                    alt="img-post"
                  />
                  <div className="post-content">
                    <div className="reaction-wrapper">
                      <img
                        src="img/like.PNG"
                        className="icon"
                        alt="like-icon"
                      />
                      <img
                        src="img/comment.PNG"
                        className="icon"
                        alt="comment-icon"
                      />
                      <img
                        src="img/send.PNG"
                        className="icon"
                        alt="send-icon"
                      />
                      <img
                        src="img/save.PNG"
                        className="save icon"
                        alt="save-icon"
                      />
                    </div>
                    <p className="likes">{post.likes} likes</p>
                    <p className="description">
                      <span>username </span> {post.description}
                    </p>
                    <p className="post-time">{post.date}</p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Postview;
