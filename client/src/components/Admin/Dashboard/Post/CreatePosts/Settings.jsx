import React, { Fragment } from "react";
import { Checkbox, Divider } from "antd";
const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Comentarios", "Score", "Redes sociales"];
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
    <Fragment>
      <p className='settings-comments'>Selecciona las secciones que desea mostrar</p>
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
    </Fragment>
  );
};

export default Settings;
