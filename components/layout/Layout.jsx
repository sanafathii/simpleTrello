import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { VscListSelection } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";

function Layout({ children }) {
  const { status } = useSession();

  const logoutHandler = async () => {
    signOut();
  };
  return (
    <div className="container">
      <header>
        <p>Fullstack Todo App</p>
        {status === "authenticated" ? (
          <button onClick={logoutHandler}>
            Logout
            <FiLogOut />
          </button>
        ) : null}
      </header>
      <div className="container--main">
        <aside>
          <p>wellcome 🖐</p>
          <ul>
            <li>
              <VscListSelection />
              <Link href="/">Todos</Link>
            </li>
            <li>
              <BiMessageSquareAdd />
              <Link href="/add-todo"> Add Todo</Link>
            </li>
            <li>
              <RxDashboard />
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
}

export default Layout;
