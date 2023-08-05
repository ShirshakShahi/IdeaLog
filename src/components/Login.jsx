import { Form, Input, Card, Button, Modal } from "antd";
import NavBar from "../components/NavBar";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../store/auth";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const showSignup = () => {
    setIsSignup(true);
  };

  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = values => {
    console.log(values)
    dispatch(signUp({
      email, password
    }));
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <Modal title="Singup" open={isSignup} footer={null} keyboard>
          <Form style={{ textAlign: "center" }} onFinish={signUpHandler}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "",
              }}
            >
              <Form.Item style={{ width: "230px" }} name="fname">
                <Input placeholder="First Name" name="fname" onChange={(e) => (setFirstName(e.target.value))} />
              </Form.Item>
              <Form.Item style={{ width: "230px" }} name="sname">
                <Input placeholder="Second Name" name="sname" onChange={(e) => (setLastName(e.target.value))} />
              </Form.Item>
            </div>
            <Form.Item name="email" >
              <Input id="email" type="text" placeholder="Email" name="email" onChange={(e) => (setEmail(e.target.value))} />
            </Form.Item>
            <Form.Item name="password" >
              <Input.Password placeholder="New Password" name="password" onChange={(e) => (setPassword(e.target.value))} />
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
