import { useEffect, useState } from "react";
import NewsApi from "../apis/api";
import CircleLoader from "../components/UI/loader/circle/Loader";
import UserImg from "../assets/images/user.png";

const UserPage = () => {
  const [user, setUser] = useState("");
  const [userLodaing, setUserLoading] = useState(true);

  const getUser = async () => {
    setUserLoading(true);
    const res = await NewsApi.getUser();
    setUser(res);
    setUserLoading(false);
  };

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
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
                    <span className="text-xl"> {user.email}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="def-light-txt text-xl">Phone - </span>
                    <span className="text-xl"> {user.cell}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="def-block-shadow p-4 bg-white my-5">
              <div>
                <h2 className="text-4xl">User News</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPage;
