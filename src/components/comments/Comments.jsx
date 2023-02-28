import { useState } from "react";
import BulletMenu from "../UI/menu/bullet-menu/BulletMenu";
import "./style.css";

const Comments = ({ comments, add }) => {
  const [comment, setComment] = useState("");
  return (
    <div className="p-4">
      <div className="comments-area h-[450px] overflow-auto pr-4 mb-2">
        {comments.map((item) => {
          return (
            <div
              className="commment px-3 py-2 border-[1px] border-black mb-4"
              key={item.id + Math.ceil(Math.random())}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-[deepskyblue">Author - </span>
                  <h2 className="ml-1] text-xl">{item.name}</h2>
                </div>
                <BulletMenu />
              </div>
              <p className="py-2 text-lg text-[gray]">{item.body}</p>
              <h3 className="text-[deepskyblue]">{item.email}</h3>
            </div>
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
          <textarea
            name=""
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
              add({ comment: comment, id: comments.length });
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
