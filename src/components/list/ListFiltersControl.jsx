import { useEffect, useState } from "react";
import CheckedIcon from "../../assets/icons/checked.png";

const ListFiltersControls = ({ filters,changeFilters }) => {
  const [filtersTemplate, setFiltersTemplate] = useState([
    {
      name: "Biztoc.com",
      type: "biztoc",
      place: 'email',
      value: false,
    },
  ]);


  const checkFilter = (el, value, place) => {
    const item = {
      place: place,
      name: el,
      value: value,
    } 
    changeFilters(item)
  };

  useEffect(() => {
      // const checkedItem = news.find(e =>)
  }, [filters]);

  return (
    <div className="container py-3">
      <div className="flex gap-5 items-center">
        {filtersTemplate.map((elem, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                elem.value = !elem.value;
                checkFilter(elem.type, elem.value, elem.place);
              }}
              className={`${
                elem.value ? "_checked" : ""
              } def-checkbox flex items-center gap-1 cursor-pointer`}
            >
              <span className="def-checkbox-ic">
                <img src={CheckedIcon} className="def-checkbox-img" alt="" />
              </span>
              <span className="def-checkbox-txt">{elem.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListFiltersControls;
