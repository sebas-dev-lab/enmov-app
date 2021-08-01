import React from "react";
import { path } from "../../helpers/path";

const SinglePostComponent = () => {
  return (
    <div className="singlePostComponent">
      <div className="singlePostComponent--wrapper">
        <img
          src={path.posts.post.img}
          alt=""
          className="singlePostComponent--img"
        />
        <h1 className="singlePostComponent--title">
          Lorem ipsum, dolor sit amet
          <div className="singlePostComponent--edit">
            <i className="singlePostComponent--edit--icon far fa-edit"></i>
            <i className="singlePostComponent--edit--icon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostComponent--info">
          <span className="singlePostComponent--info--author">
            Author: <b>Sebastian Lescano</b>
          </span>
          <span className="singlePostComponent--info--date">1 hour ago</span>
        </div>
        <p className="singlePostComponent--description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corporis
          dicta ex quidem tempora optio nesciunt consequatur officiis
          repellendus ratione neque ut aliquam, qui, fugiat perspiciatis tenetur
          voluptates iste consectetur?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo corporis dicta ex quidem tempora optio nesciunt
          consequatur officiis repellendus ratione neque ut aliquam, qui, fugiat
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corporis
          dicta ex quidem tempora optio nesciunt consequatur officiis
          repellendus ratione neque ut aliquam, qui, fugiat Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quo corporis dicta ex quidem
          tempora optio nesciunt consequatur officiis repellendus ratione neque
          ut aliquam, qui, fugiat Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo corporis dicta ex quidem tempora optio nesciunt
          consequatur officiis repellendus ratione neque ut aliquam, qui, fugiat
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corporis
          dicta ex quidem tempora optio nesciunt consequatur officiis
          repellendus ratione neque ut aliquam, qui, fugiat Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quo corporis dicta ex quidem
          tempora optio nesciunt consequatur officiis repellendus ratione neque
          ut aliquam, qui, fugiat Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo corporis dicta ex quidem tempora optio nesciunt
          consequatur officiis repellendus ratione neque ut aliquam, qui, fugiat
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corporis
          dicta ex quidem tempora optio nesciunt consequatur officiis
          repellendus ratione neque ut aliquam, qui, fugiat
        </p>
      </div>
    </div>
  );
};

export default SinglePostComponent;
