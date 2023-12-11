import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Heading>404 - Not Found</Heading>
      <BackButton onClick={() => navigate("/")}>Go Back</BackButton>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  text-align: center;
  font-size: 30px;
`;

const Heading = styled.div`
  color: white;
  font-size: 40px;
  font-weight: 700;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
