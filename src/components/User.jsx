import { FacebookFilled, InstagramOutlined, GithubOutlined, YoutubeFilled } from '@ant-design/icons';
import { Button, Card } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {

    const { userId } = useParams();
    const navigate = useNavigate();
    const handleAddNoteClick = () => {
        navigate(`/addnote/${userId}`);
    };

    const coverStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        width: "100%",
        backgroundColor: "#2b2323",
        color: "white",
        height: 150,
    }

    return (
        <div className='user-container'>
            <Card
                title="Add new note"
                style={{
                    width: 320,
                }}
                bordered={true}
                hoverable

                actions={[
                    <FacebookFilled key="facebook" style={{ color: "blue" }} />,
                    <GithubOutlined key="github" style={{ color: "black" }} />,
                    <InstagramOutlined key="instagram" style={{ color: "purple" }} />,
                    <YoutubeFilled key="youtube" style={{ color: "red" }} />,
                ]}
                extra={<Button onClick={handleAddNoteClick}>Add Note</Button>}
                cover={
                    <div style={coverStyle}>
                        {`USER ${userId}`}
                    </div>
                }>
                <Card.Meta
                    title={`USER ${userId}`}
                    description={"@shirshakshahi"}
                />
                <p>user bio goes here....</p>
            </Card>
        </div>
    )
}

export default User;
