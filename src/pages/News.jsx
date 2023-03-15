import { useEffect, useMemo, useState } from "react";
import NewsApi from "../apis/api";
import ItemsList from "../components/list/ItemsList";
import ListFiltersControls from "../components/list/ListFiltersControl";

const News = () => {
  const [filters, setFilters] = useState({
    email: {
      biztoc: false,
      miztoc: false,
      test: false,
    },
  });
  const [newsLoad, setNewsLoad] = useState(true);
  const [news, setNews] = useState([]);

  const randEmail = () => {
    const mails =['biztoc', 'miztoc','test'];
    const id = Math.floor(Math.random() * 3)
    return mails[id]
  }

  const fetchNews = async () => {
    setNewsLoad(true);
    const res = await NewsApi.getNews();
    setNews([
      ...res.map((e) => {
        return {
          ...e,
          email: randEmail(),
        };
      }),
    ]);
    setFilters((prev) => {
      return { ...prev };
    });
    setNewsLoad(false);
  };

  const handleChangeFilters = (item) => {
    setFilters((prev) => {
      return {
        ...prev,
        [item.place]: {
          ...prev.email,
          [item.name]: item.value,
        },
      };
    });
  };

  const filteredNews = useMemo(() => {
    let items = [];
    const selectedFilters = []
    Object.entries(filters.email).forEach(([key, value]) => {
      if(value) selectedFilters.push(key) 
    })
    if(selectedFilters.length) {
      items = [...news.filter(e => {
        if(selectedFilters.includes(e.email)) return e
      })]
    } else {
      items = [...news]
    }
    return items;
  }, [filters]);

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <ListFiltersControls
        filters={filters}
        news={news}
        changeFilters={handleChangeFilters}
      />
      <ItemsList news={filteredNews} load={newsLoad} />
    </div>
  );
};

export default News;
