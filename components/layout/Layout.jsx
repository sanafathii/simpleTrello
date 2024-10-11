import Link from "next/link";
import React from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { VscListSelection } from "react-icons/vsc";

function Layout({ children }) {
  return (
    <div className="container">
      <header>
        <p>Fullstack Todo App</p>
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
