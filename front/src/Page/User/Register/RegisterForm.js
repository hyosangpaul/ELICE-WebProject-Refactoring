import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Register } from './RegisterStyled';
import { Button , Col , Form , Row } from 'react-bootstrap';
import axios from 'axios';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [pwcheck, setPwcheck] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  // post로 데이터 등록
  const handleSubmit = (e) => {
    
    e.preventDefault();
    
    const formData = {
      email,
      name,
      password,
      phoneNumber,
      address
    }
    const onSubmit = () => {

      // 비밀번호가 같다면 회원가입 가능 다르면 alert
      password === pwcheck ?
      // formData로 묶은 값을 구조분해해서 전달
      (axios
        .post("http://localhost:8080/join", { ...formData })
        .then(() => {
          alert('회원가입이 완료되었습니다.')
          navigate("/LoginForm")
        })
        .catch((err) => {
          alert('에러가 발생했습니다. 다시 시도해주세요.')
        })) : (alert('비밀번호가 틀립니다. 다시 확인해 주세요.'))
    }
    onSubmit();
  }

  return (
    <Register>
      <Form style = {{ width : 600 }}>
          {/* 아이디 */}
          <Row className="mb-3" >
            <Form.Group as={Col} md="12" controlId="validationCustom02">
              <Form.Label>아이디</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Elice@elice.com"
                defaultValue=""
                value= { email }
                onChange={ (e) => setEmail(e.target.value)}
                />
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group> 
          </Row>
          
          {/* 이름 */}
          <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>이름</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="홍길동"
              defaultValue=""
              value={ name }
              onChange={ (e) => setName(e.target.value)}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
          </Row>

          {/* 비밀번호 */}
          <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              required
              type="password"
              // type을 password로 해주어야 안보이게 타이핑 가능
              placeholder="*****"
              defaultValue=""
              value={ password }
              onChange={ (e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>

          {/* 비밀번호 확인 */}
            <Form.Group as={Col} controlId="validationCustom02">
              <Form.Label>비밀번호 확인</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="*****"
                defaultValue=""
                onChange={ (e) => setPwcheck(e.target.value)}
                // onChange로 앞에 적은 password와 같은지 확인해야 함
              />
              <Form.Control.Feedback>비밀번호가 일치합니다.</Form.Control.Feedback>
            </Form.Group>
            </Row>

          {/* 전화번호 */}
          <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>전화번호</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="010-1234-5678"
              defaultValue=""
              value={ phoneNumber }
              onChange={ (e) => setPhoneNumber(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          </Row>

          {/* 주소 */}
          <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom02">
            <Form.Label>주소</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="서울특별시 광진구 화양동 123-456 1동 2호"
              defaultValue=""
              value={ address }
              onChange={ (e) => setAddress(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          </Row>
            <Button type="submit" style = {{
              // bootstrap으로 인해 수정 어려움
              backgroundColor : 'grey',
              border : 'grey',
            }} onClick = { handleSubmit }>회원가입</Button>
      </Form>
    </Register>
  );
};

export default RegisterForm;