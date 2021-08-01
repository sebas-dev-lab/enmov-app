import React from "react";
import { path } from "../../../helpers/path";

const Post = () => {
  return (
    <div className="post">
      <img className="post--img" src={path.posts.post.img} alt="img" />
      <div className="post--info">
        <div className="post--info--categories">
          <span className="post--info--categorie">Music</span>
          <span className="post--info--categorie">Life</span>
        </div>
        <span className="post--info--title">Lorem ipsum dolor sit ame</span>
        <hr />
        <span className="post--info--date">1 hourr ago</span>
        <p className="post--info--resume">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, vero
          aliquam esse unde ex, magni ut praesentium laudantium architecto sed
          aspernatur qui nesciunt voluptatum debitis est aut ea dolor suscipit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, vero
          aliquam esse unde ex, magni ut praesentium laudantium architecto sed
          aspernatur qui nesciunt voluptatum debitis est aut ea dolor
          suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Atque, vero aliquam esse unde ex, magni ut praesentium laudantium
          architecto sed aspernatur qui nesciunt voluptatum debitis est aut ea
          dolor suscipit.
        </p>
      </div>
    </div>
  );
};

export default Post;
