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
    <div>
      <div className="container">
        {newsLoad ? <LightLoader /> : ""}
        <div className="currentNews flex flex-col min-h-[880px] bg-[#fff]">
          <div className="currentNews__top h-[720px] relative border-2 border-[#919090]">
            
            <img src={item.urlToImage || noImage} alt="" className="ibg" />
          </div>
          <div className="flex-auto p-4">
            <h1 className="pb-4 text-5xl">Item Title</h1>
            <p className="pb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo dolor nihil aspernatur inventore voluptatibus? Eius
              pariatur, repellendus nemo facere, quo harum nostrum odit ipsa
              quia nisi quis perspiciatis, commodi temporibus?
            </p>
            <p className="pb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo dolor nihil aspernatur inventore voluptatibus? Eius
              pariatur, repellendus nemo facere, quo harum nostrum odit ipsa
              quia nisi quis perspiciatis, commodi temporibus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentNews;
