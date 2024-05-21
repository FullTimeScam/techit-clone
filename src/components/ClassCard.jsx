const ClassCard = () => {
  return (
    <li className="border border-Techit_gray-100 rounded-lg max-w-[604px] w-full">
      <div className="bg-[#e5f4ff] flex justify-between rounded-t-lg px-6 py-4">
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold">프론트엔드</h3>
          <h5 className="text-Techit_gray-200">기초가 탄탄한 개발자로 성장</h5>
        </div>
        <img src="../public/images/class/frontend.png" alt="frontend" />
      </div>
      <div className="flex justify-between mt-5 mb-3 px-6">
        <div className="font-bold">11기 - 사전알림</div>
        <button className="flex items-center">
          사전알림신청
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="16"
            className="ml-1"
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
    </li>
  );
};

export default ClassCard;
