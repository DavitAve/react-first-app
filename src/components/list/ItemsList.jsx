import Item from "./Item";
import "./styles.css";
import { useState, useEffect, useMemo } from "react";
import LightLoader from "../UI/loader/light/Loader";
import arrow from '../../assets/icons/arrow.png'

const ItemsList = ({news,load}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 9;
  
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
    if(!load) {
      setCurrentPage(1)
    }
  }, [news]);

  const paginLength = useMemo(() => {
    const items = []
    for (let i = 1; i < Math.ceil(news?.length/perPage); i++) {
      items.push(i)      
    }
    return items
  }, [news])

  const paginatedNews = useMemo(() => {
    const items = []
    if(currentPage < 1) return []
    if(!news.length) return []
    for (let i = (currentPage-1) * perPage; i < currentPage*perPage; i++) {
      items.push(news[i])
    }
    return items || []
  }, [currentPage,news])

  return (
    <div className="container">
      {
        news? 
        <div>
        {load ? <LightLoader></LightLoader> : ''}
        <div className="flex flex-wrap gap-5 news-list">
          {paginatedNews?.map((item,index) => {
            return <Item key={index} item={item} />;
          })}
        </div>
        <div className="pagination__wrapper flex items-center justify-center pt-7 pb-4">
          <div className="pagination__list flex gap-2">
            <div onClick={() => { changePaginPage('prev') }} className="pagin__arrow">
              <img src={arrow} alt="" className="ibg"/>
            </div>
            {
              paginLength.map((e, index) => {
                return <div key={index} className={`pagin__bullet ${currentPage === e? '_active' : ''}`} onClick={() => {setCurrentPage(e)}}>{e}</div>
              })
            }
            <div onClick={() => { changePaginPage('next') }} className="pagin__arrow reverse">
              <img src={arrow} alt="" className="ibg"/>
            </div>
          </div>
        </div>
      </div>
      : 
      <div>Empty</div> 
      }

    </div>
  );
};

export default ItemsList;
