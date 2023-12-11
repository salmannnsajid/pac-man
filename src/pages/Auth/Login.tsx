import React from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledForm = styled(Form)`
  max-width: 400px;
  width: 100%;
`;

const LoginButton = styled(Button)`
  width: 100%;
  font-size: 13px;
`;

const Heading = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Text  = styled.div`
  color: white;
  font-size: 14px;
  margin-bottom: 10px;
`;

const LinkText  = styled.span`
  color: #1890ff;
  font-size: 14px;
  cursor: pointer
`;

const Login: React.FC = () => {
    const nav = useNavigate()
  const onFinish = (values: any) => {
    console.log({ values });
    nav('/')
  };

  return (
    <CenteredContainer>
      <Heading>Sign In</Heading>
      <StyledForm
        name="LoginForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Invalid email address" },
          ]}
        >
          <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <LoginButton type="primary" htmlType="submit">
            Login
          </LoginButton>
        </Form.Item>
      </StyledForm>
      <Text>
        Don't have an account? <LinkText onClick={()=> nav('/sign-up')}>Sign Up</LinkText>
      </Text>
    </CenteredContainer>
  );
};

export default Login;
