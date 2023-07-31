import { Form, Input, Card, Button, Modal } from "antd";
import NavBar from "../components/NavBar";
import React, { useState } from "react";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const showSignup = () => {
    setIsSignup(true);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <Modal title="Singup" open={isSignup} footer={null} keyboard>
          <Form style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "",
              }}
            >
              <Form.Item style={{ width: "230px" }}>
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item style={{ width: "230px" }}>
                <Input placeholder="Second Name" />
              </Form.Item>
            </div>
            <Form.Item name="email">
              <Input id="email" type="text" placeholder="Email" />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password placeholder="New Password" />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "green" }}
            >
              Signup
            </Button>
          </Form>
        </Modal>
        <div
          style={{
            width: "300px",
          }}
        >
          <h1>IdeaLog</h1>
          <p>Record your every day for future</p>
        </div>
        <div className="center">
          <Card title="Login" style={{ width: "500px" }}>
            <Form>
              <Form.Item label="Email" name="email">
                <Input type="text" placeholder="" />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input.Password />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "black",
                  display: "block",
                  margin: "auto",
                }}
              >
                Login
              </Button>
              <Button
                type="primary"
                onClick={showSignup}
                style={{ backgroundColor: "green", marginTop: "10px" }}
              >
                CREATE NEW ACCOUNT
              </Button>
              <p></p>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;
