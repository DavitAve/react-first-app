import { useEffect, useMemo, useState } from "react";
import NewsApi from "../apis/api";
import CircleLoader from "../components/UI/loader/circle/Loader";
import UserImg from "../assets/images/user.png";
import UserNewsList from "../components/user/UserNewsList";
import LightLoader from "../components/UI/loader/light/Loader";
import UserFilterControls from "../components/user/UserFilterControls";
import DefDialog from "../components/UI/dialog/DefDialog";
import UserNewsForm from "../components/user/UserNewsForm";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [userLodaing, setUserLoading] = useState(true);
  const [dialogVisiable, setDialogVisiable] = useState(false);
  const [filters, setFiters] = useState({
    search: "",
  });

  const changeFilters = (filter) => {
    if (filter.type === "search") {
      setFiters((prev) => {
        return {
          ...prev,
          search: filter.value,
        };
      });
    }
  };

  const addNews = (item) => {
    setDialogVisiable(false);
    setNews((prev) => {
      return [item, ...prev];
    });
  };

  const getUser = async () => {
    setUserLoading(true);
    const res = await NewsApi.getUser();
    setUser(res);
    setUserLoading(false);
  };

  const fetchNews = async () => {
    setNewsLoading(true);
    const res = await NewsApi.getNews();
    setNews(res);
    setNewsLoading(false);
  };

  const showDialogAction = (val) => {
    setDialogVisiable(val);
  };

  const userNews = useMemo(() => {
    const data = [];
    news?.forEach((item) => {
      data.length < 6 && data.push(item);
    });
    return data;
  }, [news]);

  const searchedNews = useMemo(() => {
    let data = userNews;
    let searched = userNews;

    searched = searched.map((e) => {
      return {
        ...e,
        content: e.content.replaceAll(
          filters.search,
          `<div>${filters.search}</div>`
        ),
      };
    });
    if (filters.search.length) {
      data = data
        .filter((item) => {
          return item.content
            .toLowerCase()
            .includes(filters.search.toLowerCase());
        })
        .map((e) => {
          return {
            ...e,
            content: e.content
              .toLowerCase()
              .replaceAll(
                filters.search.toLowerCase(),
                '<span class="search-mark">' + filters.search + "</span>"
              ),
          };
        });
    } else {
      data = [...userNews];
    }
    return data;
  }, [filters, userNews]);

  useEffect(() => {
    getUser();
    fetchNews();
  }, []);
  return (
    <div className="content relative">
      <DefDialog show={dialogVisiable} setShow={() => showDialogAction(false)}>
        <UserNewsForm addNews={addNews} />
      </DefDialog>
      <div className="container pt-2">
        {userLodaing ? (
          <div className="flex justify-center">
            <CircleLoader />
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="py-4 px-3 bg-white flex items-start def-block-shadow">
              <div className="relative w-32 h-32">
                <img
                  className="ibg"
                  src={user.picture?.medium || UserImg}
                  alt=""
                />
              </div>
              <div className="pl-7 flex-auto">
                <div className="flex justify-between items-center w-full">
                  <h1 className="text-3xl">
                    {user.name?.first + " " + user.name?.last}
                  </h1>
                  <div>
                    <span>ID:</span>
                    <span>{user.id?.value}</span>
                  </div>
                </div>
                <div className="py-2">
                  <div className="flex items-center">
                    <span className="def-light-txt text-xl">Email - </span>
                    <span className="text-xl"> { user.email }</span>
                  </div>
                  <div className="flex items-center">
                    <span className="def-light-txt text-xl">Phone - </span>
                    <span className="text-xl"> { user.cell }</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="def-block-shadow p-4 bg-white my-5">
              <div>
                <div>
                  <h2 className="text-4xl">User News</h2>
                </div>
                <div className="py-4">
                  {newsLoading ? (
                    <LightLoader />
                  ) : (
                    <div>
                      <UserFilterControls
                        filters={filters}
                        setFilters={changeFilters}
                        showDialog={() => showDialogAction(true)}
                      />
                      <UserNewsList news={searchedNews} filters={filters} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPage;
