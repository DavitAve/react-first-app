import Item from "./Item";
import NewsApi from "../../apis/api";
import "./styles.css";
import { useState, useEffect } from "react";
import LightLoader from "../UI/loader/light/Loader";

const ItemsList = () => {
  const [news, setNews] = useState([]);
  const [newsLoad, setNewsLoad] = useState(true);

  const fetchNews = async () => {
    setNewsLoad(true);
    const res = await NewsApi.getNews();
    setNews(res);
    setNewsLoad(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="container">
      <div>
        {newsLoad ? <LightLoader></LightLoader> : <div></div>}
        <div className="flex flex-wrap gap-5">
          {news.map((item) => {
            return <Item key={item.url} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
