import React from "react";
import { path } from "../../helpers/path";

const Write = () => {
  return (
    <div className="write">
      <img src={path.posts.post.img} alt="img" className="write--img" />
      <form className="write--form">
        <div className="write--form--group">
          <label htmlFor="file-input">
            <i className="file-input--icon fas fa-plus"></i>
          </label>
          <input type="file" id="file-input" className="file-input--file" />
          <input
            type="text"
            placeholder="Title"
            className="file-input--text"
            autoFocus={true}
          />
        </div>
        <div className="write--form--group">
          <textarea
            placeholder="Tell your Story..."
            type="text"
            className="file-input--text file-input--text--textarea"
          ></textarea>
        </div>
        <button className="write--form--submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
