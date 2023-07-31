import {
  HomeOutlined,
  ProfileOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const NavBar = () => {
  const items = [
    {
      label: "Home",
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: "About",
      key: "about",
      icon: <ProfileOutlined />,
      
    },
    {
      label: "Contact Us",
      key: "contactus",
      icon: <ContactsOutlined />,
    },
  ];

  return (
    <Menu
      style={{ backgroundColor: "#0E101A", color: "white" }}
      mode="horizontal"
      items={items}
    />
  );
};

export default NavBar;
