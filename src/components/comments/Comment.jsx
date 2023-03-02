import "./style.css";
import BulletMenu from "../UI/menu/bullet-menu/BulletMenu";
import { useEffect, useState } from "react";

const Comment = ({ item, setInputAction, action }) => {
  const [commentState, setCommentState] = useState("comm");
  const commentFunc = [
    {
      name: "Answer...",
      value: "answer",
    },
    {
      name: "Block...",
      value: "block",
    },
  ];
  const changeActionType = (e) => {
    setInputAction({ e, item });
    setCommentState(e.comType.value);
  };

  return (
    <div
      className={`commment px-3 py-2 mb-4 ${
        action.id === item.id && action.type === "answer" ? "_active" : ""
      }`}
      key={item.id + Math.ceil(Math.random())}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-[deepskyblue">Author - </span>
            <h2 className="ml-1] text-xl">{item?.name}</h2>
          </div>
          <BulletMenu
            changeVariant={changeActionType}
            itemId={item?.id}
            items={commentFunc}
          />
        </div>
        <p className="py-2 text-lg text-[gray]">{item?.body}</p>
        <h3 className="text-[deepskyblue]">{item?.email}</h3>
      </div>
      <div>
        <div className="my-2">
          Answers -
          {item.answers?.length ? (
            <span> ({item.answers.length})</span>
          ) : (
            <span> No Answers</span>
          )}{" "}
        </div>
        {item.answers?.map((e, index) => {
          return (
            <div
              key={index}
              className="px-3 pt-2 py-3 border-2 border-[forestgreen] mb-2"
            >
              <h1>User - <span className="def-light-txt"> @{e.user} </span></h1>
              <p>{e.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
