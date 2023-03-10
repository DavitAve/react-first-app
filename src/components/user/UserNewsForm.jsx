import NoImage from "../../assets/images/noimage.jpg";
import moment from "moment";
import TrashIcon from "../../assets/icons/trash.png";
import { useEffect, useState } from "react";
import useImageUpload from "../../hooks/useImageUpload";

const UserNewsForm = ({ addNews }) => {
  const [currentDate, setCurrentDate] = useState(
    moment().format("L, hh:mm:ssa")
  );
  const [newPost, setNewPost] = useState({
    content: "",
    description: "",
    urlToImage: null,
    publishedAt: null,
  });
  const [image, handleUploadImage] = useImageUpload((img) => {
    setNewPost((prev) => {
      return {
        ...prev,
        urlToImage: img.dataURL,
      }
    })
  });

  const changeTime = () => {
    setInterval(() => {
      setCurrentDate(moment().format("L, hh:mm:ssa"));
    }, 1000);
  };

  const sendPost = () => {
    setNewPost((prev) => {
      const post = {
        ...prev,
        publishedAt: currentDate,
      };
      addNews(post);
      return post;
    });
    setNewPost(() => {
      return {
        content: "",
        description: "",
        urlToImage: null,
        publishedAt: null,
      };
    });
  };

  useEffect(() => {
    changeTime();
  }, []);
  return (
    <div>
      <form action="">
        <div className="p-4 py-2">
          <div className="pb-2">
            <h2 className="text-center text-3xl ">Add News Post</h2>
          </div>
          <div className="pb-8">
            <div className="relative w-full h-[440px]">
              {newPost.urlToImage ? (
                <div
                  className="absolute top-[10px] right-[10px] flex items-center justify-center cursor-pointer z-10 bg-white w-7 h-7"
                  onClick={() => {
                    setNewPost((prev) => {
                      return {
                        ...prev,
                        urlToImage: null,
                      };
                    });
                  }}
                >
                  <img src={TrashIcon} alt="" />
                </div>
              ) : (
                ""
              )}
              {!newPost.urlToImage ? (
                <label
                  htmlFor="image"
                  className="cursor-pointer absolute h-full w-full bg-black"
                >
                  <img src={NoImage} alt="" className="ibg" />
                </label>
              ) : (
                <img src={newPost.urlToImage} className="ibg" alt="" />
              )}
            </div>

            <div className="w-full flex pt-3">
              <label
                htmlFor="image"
                className="cursor-pointer w-full bullet-btn text-center"
              >
                Add Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={handleUploadImage}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 w-[720px] h-[180px] pr-2 overflow-auto">
            <div className="flex flex-col items-start">
              <label className="cursor-pointer mb-1 text-2xl" htmlFor="content">
                Content
              </label>
              <textarea
                name=""
                className="resize-none w-full def-textarea"
                id="content"
                value={newPost.content}
                onInput={(e) =>
                  setNewPost((prev) => {
                    return {
                      ...prev,
                      content: e.target.value,
                    };
                  })
                }
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className="flex flex-col items-start">
              <label
                className="cursor-pointer mb-1 text-2xl"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                name=""
                value={newPost.description}
                onInput={(e) =>
                  setNewPost((prev) => {
                    return {
                      ...prev,
                      description: e.target.value,
                    };
                  })
                }
                className="resize-none w-full def-textarea"
                id="description"
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>

          <div className="pt-6 flex justify-between items-center">
            <div>
              <span className="text-[forestgreen]">Date</span> -
              <span> {currentDate}</span>
            </div>
            <div>
              <div className="bullet-btn" onClick={() => sendPost()}>
                Add
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserNewsForm;
