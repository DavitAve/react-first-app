import { useEffect, useRef } from "react";
import CloseIc from "../../../assets/icons/close-blue.png";
import "./style.css";

const DefDialog = ({ children, show, setShow }) => {
  const dialogContent = useRef();

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (document.querySelector("body._hide")) {
            window.scrollTo(0, 0)
      };
    });
    const handler = (e) => {
      if (!dialogContent.current?.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
      document.querySelector('body').classList.toggle('_hide')
  }, [show])

  return (
    <div
      className={`dialog fixed w-full h-[100vh] bg-[rgba(0,0,0,0.3)] top-0 left-0] z-10 ${
        show ? "_active" : "_hide"
      }`}
    >
      <div className="w-full relative h-full flex justify-center items-center">
        <div className="absolute top-5 right-5 cursor-pointer">
          <img src={CloseIc} alt="" />
        </div>
        <div ref={dialogContent} className="bg-white rounded-sm">
          {children}
        </div>
      </div>
    </div>
  );
};
export default DefDialog;
