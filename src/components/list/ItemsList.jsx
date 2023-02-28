import Item from "./Item";
import NewsApi from "../../apis/api";
import "./styles.css";
import { useState, useEffect, useMemo } from "react";
import LightLoader from "../UI/loader/light/Loader";
import arrow from '../../assets/icons/arrow.png'

const ItemsList = () => {
  const [news, setNews] = useState([]);
  const [newsLoad, setNewsLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 9;

  const fetchNews = async () => {
    setNewsLoad(true);
    const res = await NewsApi.getNews();
    setNews(res);
    setNewsLoad(false);
    setCurrentPage(1)
  };
  
  const changePaginPage = (type) => {
    if(type === 'prev') {
      if(currentPage > 1) {
        setCurrentPage((prev) => prev - 1)
      }
    } else {
      if(currentPage <= paginLength.length-1) {
        setCurrentPage((prev) => prev + 1)
      }
    }
  }


  useEffect(() => {
    fetchNews();
  }, []);

  const paginLength = useMemo(() => {
    const items = []
    for (let i = 1; i < Math.ceil(news.length/perPage); i++) {
      items.push(i)      
    }
    return items
  }, [news])

  const paginatedNews = useMemo(() => {
    const items = []
    if(currentPage < 1) return []
    for (let i = (currentPage-1) * perPage; i < currentPage*perPage; i++) {
      items.push(news[i])
    }
    return items
  }, [currentPage])

  return (
    <div className="container">
      <div>
        {newsLoad ? <LightLoader></LightLoader> : ''}
        <div className="flex flex-wrap gap-5 news-list">
          {paginatedNews?.map((item) => {
            return <Item key={item?.url} item={item} />;
          })}
        </div>
        <div className="pagination__wrapper flex items-center justify-center pt-7 pb-4">
          <div className="pagination__list flex gap-2">
            <div onClick={() => { changePaginPage('prev') }} className="pagin__arrow">
              <img src={arrow} alt="" className="ibg"/>
            </div>
            {
              paginLength.map(e => {
                return <div key={e} className={`pagin__bullet ${currentPage === e? '_active' : ''}`} onClick={() => {setCurrentPage(e)}}>{e}</div>
              })
            }
            <div onClick={() => { changePaginPage('next') }} className="pagin__arrow reverse">
              <img src={arrow} alt="" className="ibg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
