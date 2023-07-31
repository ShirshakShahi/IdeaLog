import { Menu } from "antd";
import { FileAddOutlined, CopyOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const NavBarNotepage = () => {
  const items = [
    {
      label: (<Link to = "/addnote">Add Note</Link>),
      key: "addnote",
      icon: <FileAddOutlined />,
    },
    {
      label: (<Link to = "/mynote">My Note</Link>),
      key: "mynotes",
      icon: <CopyOutlined />,
    },
  ];

  return <Menu items={items} mode="horizontal" />;
};

export default NavBarNotepage;
