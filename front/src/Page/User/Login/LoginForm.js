import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Login, ButtonSC } from "./LoginStyled";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // email, password를 보내는 post 요청
  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = { email, password };

    const onSubmit = () => {
      axios
        .post("", { ...formdata })
        .then((res) => {
          if (res.data.role === "admin") {
            localStorage.setItem("adminToken", res.data.token);
            alert("관리자 로그인 되었습니다");
            // 로컬스토리지에 토큰이 들어온 상태를 인식시키기 위하여 새로고침으로 href로 이동
            window.location.href = "/";
          } else {
            localStorage.setItem("accessToken", res.data.token);
            alert("로그인 완료");
            window.location.href = "/";
          }
          // 로컬스토리지에 토큰이 들어온 상태를 인식시키기 위하여 새로고침으로 href로 이동
        })
        .catch((err) => {
          // 아이디 비밀번호를 따로 에러 출력시 보안상 문제가 생길 수 있어 통합하여 alert
          console.log(err)
          alert('아이디, 비밀번호를 확인해주세요.');
        });
    };

    onSubmit();
  };

  return (
    <ButtonSC>
      <Login>
        <FloatingLabel controlId="floatingInput" label="이메일" className="mb-3" onChange={(e) => setEmail(e.target.value)}>
          <Form.Control type="email" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="비밀번호" onChange={(e) => setPassword(e.target.value)}>
          <Form.Control type="password" />
        </FloatingLabel>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "20px",
          }}
        >
          <Button
            type="submit"
            style={{
              borderRadius: "5px",
              backgroundColor: "grey",
              borderColor: "grey",
            }}
            onClick={handleSubmit}
          >
            로그인
          </Button>
          <Button
            style={{
              marginLeft: "5px",
              borderRadius: "5px",
              backgroundColor: "grey",
              borderColor: "grey",
            }}
          >
            <Link
              to="/RegisterForm"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              회원가입
            </Link>
          </Button>
        </div>
      </Login>
    </ButtonSC>
  );
};

export default LoginForm;
