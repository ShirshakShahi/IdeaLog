import { Menu } from "antd";
import { FileAddOutlined, CopyOutlined } from "@ant-design/icons";
const NavBarNotepage = () => {
  const items = [
    {
      label: "Add Note",
      key: "addnote",
      icon: <FileAddOutlined />,
    },
    {
      label: "My notes",
      key: "mynotes",
      icon: <CopyOutlined />,
    },
  ];

  return <Menu items={items} mode="horizontal" />;
};

export default NavBarNotepage;
