import { FileAddOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

const AddNote = () => {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0E101A"
    }}>
      <Form style={{
        backgroundColor: "#293f4e",
        minWidth: "500px",
        borderRadius: "15px"
      }}>
        <Form.Item style={
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }
        }><h3 style={{ fontSize: "1.7rem", fontFamily: "arial" }}>user 1</h3></Form.Item>
        <Form.Item style={
          {
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }
        }><Input placeholder='Title' type='text' size='large' style={{ fontFamily: "arial", width: "500px", fontSize: "1.3rem" }} />
        </Form.Item>
        <Form.Item><TextArea placeholder='add your notes here' style={{
          height: "35vh",
          resize: 'none',
          fontSize: "1rem"
        }} /></Form.Item>

        <Form.Item style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItemsL: "center",
        }}>
          <Button htmlType='submit'><FileAddOutlined /><span>ADD</span></Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddNote
