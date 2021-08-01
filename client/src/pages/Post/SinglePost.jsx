import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import SinglePostComponent from "../../components/SinglePost/SinglePostComponent";

const SinglePost = () => {
  return (
    <div className="singlepost">
      <SinglePostComponent />
      <SideBar />
    </div>
  );
};

export default SinglePost;
