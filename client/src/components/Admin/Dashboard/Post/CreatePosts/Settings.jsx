import React, { Fragment } from "react";
import { Checkbox, Divider } from "antd";
const CheckboxGroup = Checkbox.Group;

const plainOptions = [
  "Comentarios",
  "Score",
  "Redes sociales",
  "Marketings",
  "Comentarios publicos",
];
const defaultCheckedList = ["Comentarios", "Score"];

const Settings = () => {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <div className="settings-checkbox">
      <p className="settings-comments">
        Secciones que desea mostrar en el post
      </p>
      <div className="settings-check">
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Seleccionar todos
        </Checkbox>
        <Divider />
        <CheckboxGroup
          options={plainOptions}
          value={checkedList}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Settings;
