import moment from "moment";
import noimage from "../../assets/images/noimage.jpg";

const UserNews = ({ data }) => {

  return (
    <div className="def-block-shadow flex flex-col">
      <div className="h-[320px] relative">
        <img className="ibg" src={data.urlToImage || noimage} alt="" />
      </div>
      <div className="flex flex-auto flex-col gap-4 py-4 px-2 def-cart-cont">
        <div className="min-h-[100px]">
          <p className="text-2xl mb-1 text-[forestgreen]">Content</p>
          <p dangerouslySetInnerHTML={{__html : data.content}}></p>
        </div>
        <div className="flex-auto">
          <p className="text-2xl mb-1 text-[forestgreen]">Description</p>
          <p>{data.description}</p>
        </div>
        <div className="flex items-center">
          <span className="def-light-txt">Published Date</span>
          <h3 className="pl-2">{ moment(data.publishedAt).format("L, hh:mm:ssa") !== 'Invalid date' ? moment(data.publishedAt).format("L, hh:mm:ssa") : data.publishedAt }</h3>
        </div>
      </div>
    </div>
  );
};

export default UserNews;
