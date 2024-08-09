import React from "react";
import styles from "./sidebar.module.css";
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelp,
  MdLogout,
  MdPeople,
  MdSettings,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
import MenuLink from "./menuLinks/menuLinks";
import Image from "next/image";
import { auth, signOut } from "@/app/auth";
import { revalidatePath } from "next/cache";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Transaction",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revneue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/people",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdSettings />,
      },

      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelp />,
      },
    ],
  },
];
async function Sidebar() {
  const { user } = await auth();
  console.log(user);
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src={user.image || "/default.png"}
          alt=""
          width="60"
          height="30"
          className={styles.img}
        />
        <div className={styles.userDetails}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>Administator</span>
        </div>
      </div>

      <ul>
        {menuItems.map((item) => {
          return (
            <li key={item.title}>
              <span className={styles.title}>{item.title}</span>
              {item.list.map((cat) => (
                <MenuLink cat={cat} key={cat.title} />
              ))}
            </li>
          );
        })}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit" className={styles.button}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
}

export default Sidebar;
