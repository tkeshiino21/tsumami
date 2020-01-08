import React, { useCallback } from "react";

const Forms = props => {
  inputForms = [
    {
      name: "name",
      type: "text",
      value: e.target.value,
      onChange: props.onChangeHandler,
    },
  ];
  return inputForms;
};

export default Forms;
