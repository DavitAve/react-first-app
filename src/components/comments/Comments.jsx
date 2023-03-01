import { useEffect, useState } from "react";
import "./style.css";
import Comment from "./Comment";

const Comments = ({ comments, add, addAnswer }) => {
  const [comment, setComment] = useState();
  const [activeCommentUser, setActiveCommentUser] = useState({});
  const [commentAction, setCommentAction] = useState("comm");

  const addComment = () => {
    if (activeCommentUser.type === "comm") {
      add({ comment: comment, id: comments.length });
    } else if (activeCommentUser.type === "answer") {
      addAnswer(activeCommentUser.id, comment);
    }
    setComment("");
  };
  const changeAction = (info) => {
    setCommentAction(info.e.comType.value);
    setActiveCommentUser({
      type: info.e.comType.value,
      id: info.item.id,
      email: info.item.email,
    });
  };

  return (
    <div className="p-4">
      <div className="comments-area h-[450px] overflow-auto pr-4 mb-2">
        {comments?.map((item, index) => {
          return (
            <Comment
              key={index}
              item={item}
              setInputAction={changeAction}
              action={activeCommentUser}
            />
          );
        })}
      </div>
      <div className="flex items-start pr-[35px] py-4 pl-4 bg-[#EEEEEE] comments-area">
        <div className="w-[80px] h-[80px] relative overflow-hidden rounded-full">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
            className="ibg"
          />
        </div>
        <div className="flex-auto pl-3 flex flex-col items-end">
          {commentAction === "answer" ? (
            <div className="flex-auto w-full flex justify-between">
              <div>Answer to {activeCommentUser.email}</div>
              <div
                onClick={() => {
                  setCommentAction("comm");
                  setActiveCommentUser({ type: "comm" });
                }}
              >
                X
              </div>
            </div>
          ) : (
            ""
          )}
          <textarea
            name=""
            value={comment}
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              setComment(e.target.value);
            }}
            className="resize-none py-1 px-2 border-[1px] border-black block w-full h-[100px]"
          ></textarea>
          <button
            className="def-btn mt-2"
            onClick={() => {
              addComment();
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
