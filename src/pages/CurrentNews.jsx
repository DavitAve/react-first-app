import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import noImage from "../assets/images/noimage.jpg";
import NewsApi from "../apis/api";
import LightLoader from "../components/UI/loader/light/Loader";
import Comments from "../components/comments/Comments";

const CurrentNews = () => {
  const [news, setNews] = useState([]);
  const [comments, setComments] = useState([]);
  const [newsLoad, setNewsLoad] = useState(true);
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [ newComment, setNewComment ] = useState({})
  const [ user, setUser ] = useState({
    name: 'User 001',
    email: 'userTest@gmail.com'
  })

  const fetchNews = async () => {
    setNewsLoad(true);
    const res = await NewsApi.getNews();
    setNews(res);
    setNewsLoad(false);
  };

  const fetchComments = async () => {
    const res = await NewsApi.getComments();
    setComments(res)
  };

  const addComment = (comment) => {
    setNewComment(
      {
        body: comment.comment,
        email: user.email,
        name: user.name,
        id: comment.id + 1,
        postId: comment.id + 1,
      }
    )
  }

  useEffect(() => {
    fetchNews();
    fetchComments();
  }, []);

  useEffect(() => {
    if(newComment.body) {
      setComments((prev) => [...prev, newComment])
    }
  }, [newComment])

  useEffect(() => {
    if (news.length) {
      const element = news.find((e) => e.author === id);
      if (element) setItem(element);
    }
  }, [news]);

  return (
    <div className="pb-10">
      <div className="container">
        <div className="currentNews flex flex-col min-h-[880px] bg-[#fff] mb-8">
          {newsLoad ? <LightLoader /> : ""}
          <div className="currentNews__top h-[720px] relative border-2 border-[#919090]">
            <img src={item?.urlToImage || noImage} alt="" className="ibg" />
          </div>
          <div className="flex-auto p-4">
            <h1 className="pb-4 text-5xl leading-snug">{item?.title}</h1>
            <div className="flex items-center pb-4">
              <span>Author - </span>
              <h1 className="text-3xl"> {item?.author}</h1>
            </div>
            <p className="pb-2">{item?.content}</p>
            <p className="pb-2">{item?.description}</p>
            <div>
              <a href={item?.url} className="def__link">
                Author Source
              </a>
            </div>
          </div>
        </div>
        <div className="mb-8 bg-[#fff]">
          <h2 className="text-2xl mb-4 pl-4 pt-4">Commetns</h2>
          <Comments comments={comments} add={addComment}/>
        </div>
      </div>
    </div>
  );
};

export default CurrentNews;
