import { useEffect, useState } from "react";
import CheckedIcon from "../../assets/icons/checked.png";

const ListFiltersControls = ({ news }) => {
  const [filtersTemplate, setFiltersTemplate] = useState([
    {
      name: "Biztoc.com",
      type: "biztoc",
      value: false,
    },
  ]);
  const [filters, setFilters] = useState({
    email: {
      biztoc: false,
    },
  });

  const checkFilter = (el,value) => {
    setFilters((prev) => {
      return {
        ...prev,
        [el]: value,
      };
    });
  };

  useEffect(() => {
  }, [filters]);

  return (
    <div className="container py-3">
      <div className="flex gap-5 items-center">
        {filtersTemplate.map((elem) => {
          return (
            <div
              onClick={() => {
                elem.value = !elem.value;
                checkFilter("biztoc", elem.value);
              }}
              className={`${elem.value? '_checked': ''} def-checkbox flex items-center gap-1 cursor-pointer`}
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
