import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="fs-1 fw-bold text-center text-dark">Page Not Found</h1>
      <br />
      <Button
        className="d-block"
        variant="primary"
        onClick={() => navigate("/")}
      >
        Go Home
      </Button>
    </div>
  );
};

export default NotFound;
