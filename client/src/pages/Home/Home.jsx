import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </Fragment>
  );
};

export default Home;
