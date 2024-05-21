import { useEffect, useState } from "react";
import monthData from "../data/monthData.json";

const MonthSection = () => {
  const [currentMonthData, setCurrentMonthData] = useState(monthData[0]);

  const [currentPage, setCurrentPage] = useState(0);

  const onClickPrev = () => {
    if (currentPage === 0) {
      setCurrentPage(monthData.length - 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const onClickNext = () => {
    if (monthData.length - 1 === currentPage) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setCurrentMonthData(monthData[currentPage]);
  }, [currentPage]);

  return (
    <div>
      <div className="flex justify-center">
        <button onClick={onClickPrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 lg:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div className="font-semibold mx-2 text-2xl">
          {Object.keys(currentMonthData)[0]}
        </div>
        <button onClick={onClickNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 lg:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MonthSection;
