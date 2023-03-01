import { useEffect, useRef, useState } from "react";
import dots from "../../../../assets/icons/menu-dots.png";
import "./style.css";

const BulletMenu = ({ items,changeVariant,itemId }) => {
  const [show, setShow] = useState(false);
  const id = Math.ceil(Math.random());
  const menuRef = useRef()

  const setCommentType = (e) => {
    changeVariant({comType: e, itemId});
    setShow(false)
  }

  useEffect(() => {
      const handler = (e) => {
        if(!menuRef.current?.contains(e.target)) {
          setShow(false)
        }
      }
      document.addEventListener('mousedown', handler)
  })

  return (
    <div className="relative" ref={menuRef}>
      <div className="dots w-[20px] h-[20px] relative cursor-pointer">
        <img
          src={dots}
          alt=""
          className={`dots-${id} ibg`}
          onClick={() => {
            setShow((prev) => !prev);
          }}
        />
      </div>
      <div className={`menu ${show ? "_active " : ""}`}>
        <ul className="menu__list">
          {
            items.map((e, index) => {
              return (
                <li key={index} className="menu__item" onClick={() => setCommentType(e)}>{ e.name }</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default BulletMenu;
