import { Form, Input, Card, Button } from "antd";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container">
      <div className="center">
        <Card title="Signup" style={{ width: "500px" }}>
          <Form>
            <Form.Item label="Email" name="email">
              <Input type="text" placeholder="example@example.com" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input.Password />
            </Form.Item>
            <Form.Item label="Confirm Password" name="password">
              <Input.Password />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "black" }}
            >
              Signup
            </Button>
            <p>
              Already have an account ?{" "}
              <Link to="/login">
                <span>Login here</span>
              </Link>
            </p>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
