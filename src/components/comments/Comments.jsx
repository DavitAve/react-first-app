import { useEffect, useState } from "react";
import "./style.css";
import Comment from "./Comment";
import CloseIcon from '../../assets/icons/close-blue.png'

const Comments = ({ comments, add, addAnswer }) => {
  const [comment, setComment] = useState();
  const [activeCommentUser, setActiveCommentUser] = useState({type: 'comm'});

  const addComment = () => {
    if (activeCommentUser.type === "comm") {
      add({ comment: comment, id: comments.length });
    } else if (activeCommentUser.type === "answer") {
      addAnswer(activeCommentUser.id, comment);
    }
    setTimeout(() => {
      setComment("");
    }, 50);
  };
  const changeAction = (info) => {
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
          {activeCommentUser.type === "answer" ? (
            <div className="flex-auto w-full flex justify-between">
              <div>Answer to <span className="def-light-txt">{activeCommentUser.email}</span></div>
              <div
                onClick={() => {
                  setActiveCommentUser({ type: "comm" });
                }}
              >
                <div className="cursor-pointer btn-def-active">
                  <img src={CloseIcon} alt="" />
                </div>
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
            onKeyDown={(e) => {
              if(e.key === 'Enter') {
                addComment();
              }
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