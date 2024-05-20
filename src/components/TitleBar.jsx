const TitleBar = ({ title, description, isDetail }) => {
  return (
    <div className="h-[64.5px] flex justify-between items-end font-semibold">
      <div className="h-full flex flex-col justify-between">
        <h5 className="text-Techit_orange">{title}</h5>
        <h3 className="text-Techit_gray-300 text-[26px]">{description}</h3>
      </div>
      {isDetail && (
        <button className="flex items-center text-sm">
          <span className="mr-1">자세히보기</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default TitleBar;
