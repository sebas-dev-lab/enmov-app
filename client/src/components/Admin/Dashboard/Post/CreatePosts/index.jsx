import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, message, Space } from "antd";
import Resume from "./Resume";
import Settings from "./Settings";
import UploadImage from "./UploadImage";
import { createNewPost } from "../../../../../redux/actions/post/write";
import { createNewPostPromise } from "../../../../../helpers/postPromises";
import ModalUpImage from "./ModalUpImage";
import TimeLinePost from "./TimeLinePost";

const success = () => {
  message.success("Post creado correctamente");
};

const error = () => {
  message.error("Error al intentar crear un nuevo post");
};

const warning = () => {
  message.warning("Error desconocido, Contacte con soporte");
};

const CreatePost = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState({
    date: Date.now(),
    title: "",
    subtitle: "",
    resume: "",
  });
  const [statusCreate, setStatusCreate] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCreateNewPost = (e) => {
    e.preventDefault();
    setStatusCreate(!statusCreate);
    success();
    // createNewPostPromise(dispatch, content).then((res) => {
    //   if (res) {
    //     success();
    //   } else {
    //     error();
    //   }
    // });
  };

  return (
    <div className="create-post">
      <div className="step-post">
        <TimeLinePost stepStatus={2}/>
      </div>
      <div className="content-post">
        <div className="title-post">
          <h2>Crea un Post</h2>
        </div>
        <div className="resume-section">
          {/* titulo, subtitulo, resumen, imagen de portada */}
          <Resume content={content} setContent={setContent} />
        </div>
        <div className="post-section">
          {/* Post full description images*/}
          {statusCreate ? (
            <Fragment>
              <Button onClick={handleCreateNewPost}>oso</Button>
              <Button type="primary" onClick={showModal}>
                Cargar imagen de portada
              </Button>
            </Fragment>
          ) : (
            <Button onClick={handleCreateNewPost} type="primary">
              Crear post y comenzar a escribir
            </Button>
          )}
        </div>
      </div>
      <div className="settings-post">
        <div className="title-post-settings">
          <h2>Opciones</h2>
          <Settings />
        </div>
      </div>
      <ModalUpImage
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
    </div>
  );
};

export default CreatePost;
