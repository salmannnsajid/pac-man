import { Button } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Home: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        type="primary"
        onClick={() => navigate("/pac-man")}
      >
        Play PACMAN
      </Button>
    </div>
  );
};
