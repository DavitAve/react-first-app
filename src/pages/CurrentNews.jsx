import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import noImage from "../assets/images/noimage.jpg";
import NewsApi from "../apis/api";
import LightLoader from "../components/UI/loader/light/Loader";

const CurrentNews = () => {
  const [news, setNews] = useState([]);
  const [newsLoad, setNewsLoad] = useState(true);
  const [item, setItem] = useState({});
  const { id } = useParams();

  const fetchNews = async () => {
    setNewsLoad(true);
    const res = await NewsApi.getNews();
    setNews(res);
    setNewsLoad(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (news.length) {
      const element = news.find((e) => e.author === id);
      if (element) setItem(element);
    }
  }, [news]);

  return (
    <div className="pb-10">
      <div className="container">
        {newsLoad ? <LightLoader /> : ""}
        <div className="currentNews flex flex-col min-h-[880px] bg-[#fff]">
          <div className="currentNews__top h-[720px] relative border-2 border-[#919090]">
            <img src={item?.urlToImage || noImage} alt="" className="ibg" />
          </div>
          <div className="flex-auto p-4">
            <h1 className="pb-4 text-5xl">{item?.title}</h1>
            <div className="flex items-center pb-4">
              <span>Author - </span>
              <h1 className="text-3xl"> {item?.author}</h1>
            </div>
            <p className="pb-2">{item?.content}</p>
            <p className="pb-2">{item?.description}</p>
            <div>
              <a href={item?.url} target="_blank" className="def__link">
                Item Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentNews;
