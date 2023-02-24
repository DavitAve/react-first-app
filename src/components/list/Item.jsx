import { Link } from "react-router-dom"
import noImage from '../../assets/images/noimage.jpg'

const Item = ({ item }) => {
    return (
        <div className="item flex flex-col bg-[#fff">
            <div className="relative h-60 w-full">
                <img  src={item.urlToImage|| noImage} alt=""  className="ibg"/>
            </div>
            <div className="flex flex-col flex-auto p-3">
                <div className="flex flex-col pb-5 flex-auto">
                    <h2 className="item__title max-w-full text-2xl pb-2 break-all">{ item.author || 'No Author' }</h2>
                    <p className="max-w-full text-xs text-[#383838]">{ item.content }</p>
                </div>
                <div className="flex">
                    <Link className="item-btn py-1 px-6 inline-block" to={`/news/${item.author}`}>More</Link>
                    {/* <a className="item-btn py-1 px-6 inline-block" href={`/news:${item.url}`}>More</a> */}
                </div>
            </div>
        </div>
    )
}

export default Item