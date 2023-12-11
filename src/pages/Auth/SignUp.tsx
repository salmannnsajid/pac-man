import React from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
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

const SignupButton = styled(Button)`
  width: 100%;
  font-size: 13px;
`;

const Heading = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const LoginText  = styled.div`
  color: white;
  font-size: 14px;
  margin-bottom: 10px;
`;

const LinkText  = styled.span`
  color: #1890ff;
  font-size: 14px;
  cursor: pointer
`;

const Signup: React.FC = () => {
    const nav = useNavigate()
  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <CenteredContainer>
      <Heading>Sign Up</Heading>
      <StyledForm
        name="signupForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: "Please enter your first name" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="First Name" />
        </Form.Item>

        <Form.Item
          name="lastName"
          rules={[{ required: true, message: "Please enter your last name" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Last Name" />
        </Form.Item>

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
          <SignupButton type="primary" htmlType="submit">
            Signup
          </SignupButton>
        </Form.Item>
      </StyledForm>
      <LoginText>
        Already have an account? <LinkText onClick={()=> nav('/login')}>Login</LinkText>
      </LoginText>
    </CenteredContainer>
  );
};

export default Signup;
