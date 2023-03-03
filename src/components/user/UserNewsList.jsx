import UserNews from "./UserNews";

const UserNewsList = ({ news }) => {
  return (
    <div className="def-list">
      {news.map((item, index) => {
        return <UserNews key={index} data={item} />;
      })}
    </div>
  );
};

export default UserNewsList;
