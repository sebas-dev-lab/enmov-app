import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, message, Space, Steps } from "antd";
import Resume from "./Resume";
import Settings from "./Settings";
import UploadImage from "./UploadImage";
import { createNewPost } from "../../../../../redux/actions/post/write";
import { createNewPostPromise } from "../../../../../helpers/postPromises";
import ModalUpImage from "./ModalUpImage";
import TimeLinePost from "./TimeLinePost";

// ============================================================================ //
/*
  Primera parte=> Seccion de resumen
    - titulo, subtitulo y resumen
  Segunda parte=> Seccion de imagen de portada
    - Modal con informacion de imagin y subir la imagen. 
    - Al dar ok en modal se crea la imagen y se guarda en en el back.
  Tercera parte=> Seccion de contenido de post. => Quill
    - Al tener las partes 1 y 2 completas se habilita la 3era parte. 
*/
// ============================================================================ //
const { Step } = Steps;

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [phases, setPhases] = useState({
    step_1: false,
    step_2: false,
    step_3: false,
  });
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setPhases({ ...phases, step_2: true });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCreateNewPost = (e) => {
    e.preventDefault();
    success();
    setPhases({ ...phases, step_1: true });
    // createNewPostPromise(dispatch, content).then((res) => {
    //   if (res) {
    //     success();
    //   } else {
    //     error();
    //   }
    // });
  };

  let handleSetStep = () => {
    let st = 1;
    Object.keys(phases).forEach((item) => {
      if (phases[item]) {
        switch (item) {
          case "step_1":
            st = 2;
            break;
          case "step_2":
            st = 3;
            break;
          case "step_3":
            st = 4;
            break;
          default:
            break;
        }
      }
    });
    setStep(st);
  };

  useEffect(() => {
    handleSetStep();
  }, [phases]);

  return (
    <div className="create-post">
      <div className="step-post">
        <p>Pasos para el desarrollo del post</p>
        <TimeLinePost stepStatus={step} />
        <div className="step-post--status">
          <p>Estado del post</p>
          <Steps direction="vertical" size="small" current={1}>
            <Step title="Iniciado" description="Post creado" />
            <Step title="En Progreso" description="Post en progreso." />
            <Step title="Filizado" description="Post Publicado" />
          </Steps>
        </div>
      </div>
      <div className="content-post">
        {/* <div className="title-post">
        </div> */}
        <div className="resume-section">
          {/* titulo, subtitulo, resumen, imagen de portada */}
          <p>Paso 1 - Informacion basica del post</p>
          <Resume content={content} setContent={setContent} />
          {!phases.step_1 && (
            <Button onClick={handleCreateNewPost} type="primary">
              Crear post
            </Button>
          )}
        </div>
        <div className="post-section">
          {/* Post full description images*/}
          <p>Paso 2 - Cargar imagen de portada</p>
          {phases.step_2 ? (
            <Button type="primary" onClick={showModal}>
              Modificar imagen de portada
            </Button>
          ) : (
            <Button
              disabled={!phases.step_1}
              type="primary"
              onClick={showModal}
            >
              Cargar imagen
            </Button>
          )}
          <div className="post-section--write">
            <p>Paso 3 - Desarrolla el contenido del post</p>
            <Button disabled={!phases.step_2} type="primary">
              Escribir Post
            </Button>
          </div>
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
