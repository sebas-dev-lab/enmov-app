import { Button, Divider } from "antd";
import React from "react";
import Resume from "./Resume";
import Settings from "./Settings";
import UploadImage from "./UploadImage";

const CreatePost = () => {
  return (
    <div className="create-post">
      <div className="content-post">
        <div className="title-post">
          <h2>Crea un Post</h2>
        </div>
        <div className="resume-section">
          {/* titulo, subtitulo, resumen, imagen de portada */}
          <Resume />
          <UploadImage />
        </div>
        <div className="post-section">
          {/* Post full description images*/}
          <Button type="primary">Cuerpo del post</Button>
        </div>
      </div>
      <div className="settings-post">
        <div className="title-post-settings">
          <h2>Opciones</h2>
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
