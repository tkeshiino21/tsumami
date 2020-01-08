import React from "react";

export const InputsTypeRender = props => {
  let inputEl = null;
  switch (props.type) {
    case "input":
      inputEl = (
        <input
          type={props.elementType}
          required={props.required}
          autoFocus={props.autoFocus}
        />
      );
      break;
    case "select":
      inputEl = (
        <select
          type={props.elementType}
          required={props.required}
          autoFocus={props.autoFocus}
        />
      );
      break;
    default:
      console.log("this cannot be reached");
  }
  return <label htmlFor={props.type}>{inputEl}</label>;
};

export const inputsData = props => {
  return {
    orderForm: {
      name: {
        type: "input",
        elementType: "text",
        elementConfig: props.inputElementConfig,
        required: true,
        label: "名前",
        placeholder: "お名前またはニックネームを入力してください*",
        autoFocus: true,
        value: props.value,
        onChange: props.inputHandler,
      },
      department: {
        type: "select",
        elementType: "text",
        elementConfig: {
          config: props.inputElementConfig,
          opiton: [
            "総務部",
            "人事部",
            "デザインチーム",
            "開発チームA",
            "バック開発チームB",
          ],
        },
        required: false,
        label: "名前",
        placeholder: "部署を選択してください(任意)",
        value: props.value,
        onChange: props.inputHandler,
      },
      email: {
        type: "input",
        elementType: "email",
        elementConfig: props.inputElementConfig,
        required: true,
        label: "名前",
        placeholder: "emailを入力してください*",
        value: props.value,
        onChange: props.inputHandler,
      },
      password: {
        type: "input",
        elementType: "password",
        elementConfig: props.inputElementConfig,
        required: true,
        label: "名前",
        placeholder: "パスワードを設定してください*",
        value: props.value,
        onChange: props.inputHandler,
      },
    },
  };
};

export default inputsData;
