import React from "react";
import { Timeline } from "antd";
import { ClockCircleOutlined, LoadingOutlined } from "@ant-design/icons";

const TimeLinePost = ({ stepStatus }) => {
  return (
    <Timeline>
      <Timeline.Item
        dot={
          stepStatus == 1 && (
            <ClockCircleOutlined style={{ fontSize: "16px" }} />
          )
        }
        color={stepStatus > 1 ? "green" : stepStatus == 1 ? "red" : "blue"}
      >
        Titulo, subtitulo y resumen
      </Timeline.Item>
      <Timeline.Item
        dot={
          stepStatus == 2 && (
            <ClockCircleOutlined style={{ fontSize: "16px" }} />
          )
        }
        color={stepStatus > 2 ? "green" : stepStatus == 2 ? "red" : "blue"}
      >
        Subir imagen e inforamcion de portada
      </Timeline.Item>
      <Timeline.Item
        dot={
          stepStatus == 3 && (
            <ClockCircleOutlined style={{ fontSize: "16px" }} />
          )
        }
        color={stepStatus > 3 ? "green" : stepStatus == 3 ? "red" : "blue"}
      >
        Deslumbra a tus lectores
      </Timeline.Item>
      <Timeline.Item
        dot={
          stepStatus != 4 && (
            <LoadingOutlined style={{ fontSize: "16px" }} />
          )
        }
        color={stepStatus == 4 ? "green" : "blue"}
      >
        Finalizar
      </Timeline.Item>
    </Timeline>
  );
};

export default TimeLinePost;
