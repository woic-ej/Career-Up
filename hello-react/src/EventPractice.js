import React, { useState } from "react";
import "./App.css";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: ""
  });
  const { username, message } = form;

  const onChange = e => {
    const nextForm = {
      ...form, //기존의 input값을 복사하여 가져옴
      [e.target.name]: e.target.value // target value를 name에 넣어줌.
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: ""
    });
  };

  const onKeyPress = e => {
    if (e.key === "Enter") {  //enter키를 눌러도 onClick메소드가 호출됨.
      onClick();
    }
  };

  return (
    <div className="container">
        <div className="table">
            <h1>이벤트 핸들링</h1>
            <div className="input-container">
                <label className="input-label">사용자명:</label>
                <input
                type="text"
                name="username"
                className="input-field"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
                />
            </div>
            <div className="input-container">
                <label className="input-label">메시지:</label>
                <input
                type="text"
                name="message"
                className="input-field"
                placeholder="아무거나 입력해봐라"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
                />
            </div>
            <div className="button-container">
                <button className="button" onClick={onClick}>
                확인
                </button>
            </div>
      </div>
    </div>
  );
};

export default EventPractice;
