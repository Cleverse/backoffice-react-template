import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
  ExperimentOutlined,
  EditOutlined,
  BugOutlined,
  UserOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { useRouteMatch, useLocation, useHistory } from "react-router-dom";
import { type } from "os";

const { SubMenu } = Menu;

const MenuItems = [
  {
    title: "Category",
    path: "/category",
    icon: <MailOutlined />,
  },
  {
    title: "Course",
    path: "/course",
    icon: <ExperimentOutlined />,
    type: "subMenu",
    subMenus: [
      { title: "Manage", path: "/course/manage", icon: <EditOutlined /> },
      { title: "Report", path: "/course/report", icon: <BugOutlined /> },
    ],
  },
  {
    title: "Instructor",
    path: "/instructor",
    icon: <UserOutlined />,
  },
  {
    title: "Coupon",
    path: "/coupon",
    icon: <TagOutlined />,
  },
];
export const Sidebar = () => {
  const location = useLocation();
  const history = useHistory();

  const flattenMenu: any[] = MenuItems.reduce((prev: any, curr) => {
    const sub = curr.subMenus || [];
    return [...prev, ...sub, curr];
  }, []);
  const currentMenu = flattenMenu.find((item: any) =>
    location.pathname.startsWith(item.path)
  );
  const currentSelected = currentMenu?.path;

  const defaultOpenKeys = MenuItems.filter(
    (menu) => menu.type === "subMenu"
  ).map((menu) => menu.path);

  return (
    <div className="w-80  min-h-screen" style={{ backgroundColor: "#F9FAFC" }}>
      <div className="w-full flex justify-center items-center">
        <div className="w-12 h-12 rounded-full my-6 bg-gray-800 text-white text-sm flex justify-center items-center ">
          LOGO
        </div>
      </div>
      <Menu
        selectedKeys={[currentSelected]}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
      >
        {MenuItems.map((menu, idx) => {
          if (menu.type === "subMenu")
            return (
              <SubMenu key={menu.path} title={menu.title} icon={menu.icon}>
                {menu.subMenus.map((menu, idx) => (
                  <Menu.Item
                    key={menu.path}
                    icon={menu.icon}
                    onClick={() => history.push(menu.path)}
                  >
                    {menu.title}
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          return (
            <Menu.Item
              key={menu.path}
              icon={menu.icon}
              onClick={() => history.push(menu.path)}
            >
              {menu.title}
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};
