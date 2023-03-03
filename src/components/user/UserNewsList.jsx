import UserNews from "./UserNews";

const UserNewsList = ({ news,filters }) => {
  return (
    <div className="def-list">
      {news.map((item, index) => {
        return <UserNews key={index} data={item} filters={filters}/>;
      })}
    </div>
  );
};

export default UserNewsList;
