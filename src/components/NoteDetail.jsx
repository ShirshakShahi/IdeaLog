import { Button, Card } from 'antd'
import React from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

const NoteDetail = () => {
    const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, inventore eum expedita odio pariatur sed beatae ratione similique natus, cumque cupiditate eligendi voluptas nemo modi totam. Incidunt sapiente voluptatem, doloremque debitis eligendi, inventore ipsum iste veniam, mollitia ut amet voluptates commodi deleniti. Maxime quaerat praesentium ab assumenda dolores similique, molestias nemo, suscipit explicabo, numquam iusto optio debitis labore! Itaque magnam, libero facilis repudiandae nihil, vero soluta aliquam placeat alias praesentium vitae? Eveniet vero, labore porro veniam tenetur ipsum? Pariatur corrupti esse, itaque vitae animi quae voluptates, vero ipsam qui deserunt temporibus? Repellendus expedita veniam molestiae eius omnis nostrum porro aperiam. Fuga incidunt necessitatibus voluptatibus veritatis voluptatum exercitationem quaerat, enim adipisci, autem sapiente harum praesentium, vitae quibusdam distinctio earum doloribus! Reprehenderit impedit vero, quidem sed modi velit quo ipsum assumenda sunt eum! Illo, corrupti delectus aspernatur nihil doloribus iusto vitae hic sequi reiciendis rem animi accusantium voluptatibus tempore, consequatur ab esse ea dolor magni. Eaque, facilis explicabo! Ducimus, sapiente consectetur! Cum fugit explicabo, aliquid, quidem eaque eligendi sunt nemo ex, maxime et animi? Ea labore optio velit recusandae, alias dolor fugit atque quasi, sapiente praesentium hic tempore ut iusto? Repellendus, voluptatibus qui? Eaque maiores dolor ipsa sunt, facere tempora minus incidunt distinctio ratione consequatur ex delectus, commodi eius error saepe beatae autem animi quo. Distinctio vitae vel dolor repellat? Necessitatibus odio unde aperiam inventore laborum sapiente perferendis quibusdam, commodi earum suscipit magnam soluta incidunt praesentium omnis esse facilis. Deserunt quos ad provident commodi? Voluptates ducimus nesciunt quidem, magnam dolores, praesentium eligendi alias nihil unde tempore, ratione dolorem officia laborum! Numquam, facere cupiditate doloremque, aliquam quidem rem accusamus eveniet harum odit repellendus non qui nam. Consequuntur magnam inventore soluta quas perferendis quod, nisi nemo saepe nostrum, repellat nesciunt dicta quos eos ullam, laboriosam optio natus quasi totam quis nulla error illo? Labore!"
    return (
        <>
            <div style={
                {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "15px"
                }
            }>
                <Card
                    style={{
                        width: "60%",
                    }}
                    title="hi"
                    actions={[
                        <Button >View More</Button>
                    ]}
                    extra={<div style={{
                        width: "180px",
                        display: "flex",
                        justifyContent: "space-between"

                    }}>
                        <Button><EditOutlined /> edit</Button>
                        <Button danger><DeleteOutlined />delete</Button>
                    </div>}
                >
                    {desc.slice(0, 100)}
                </Card>
            </div>

        </>
    )
}

export default NoteDetail;
