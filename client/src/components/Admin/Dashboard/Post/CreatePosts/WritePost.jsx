import React, { useCallback, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { io } from "socket.io-client";

const TOOLBAR_OPTIONS = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: [1, 2, 3, 4, 5, 6, false] }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["image", "blackquote", "code-block"],
  ["clean"]["clean"], // remove formatting button
];

const WritePost = () => {
  useEffect(() => {
    const socket = io('http://localhost:4000');
    return () => {
      socket.disconnect();
    };
  }, []);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";

    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS } });
  }, []);

  return (
    <div className="write_post">
      <div className="container" ref={wrapperRef}></div>
    </div>
  );
};

export default WritePost;
