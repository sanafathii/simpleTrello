import React from "react";
import { RiMastodonLine } from "react-icons/ri";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

function Tasks({ data, fetchTodos, next, back }) {
  return (
    <div className="tasks">
      {data?.map((item) => {
        <div key={item._id} className="tasks__card">
          <span className={item.status}></span>
          <RiMastodonLine />
          <h4>{item.title}</h4>
          <div>
            {back ? (
              <button className="button-back">
                {" "}
                <BiLeftArrow /> back
              </button>
            ) : null}
            {next ? (
              <button className="button-next">
                <BiRightArrow /> next
              </button>
            ) : null}
          </div>
        </div>;
      })}
    </div>
  );
}

export default Tasks;
