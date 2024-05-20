import kdtData from "../data/kdtData.json";

const KdtSection = () => {
  return (
    <section className="mt-10 lg:mt-20 container-styl px-6">
      <div className="h-[64.5px] flex justify-between items-end font-semibold">
        <div className="h-full flex flex-col justify-between">
          <h5 className="text-Techit_orange">KDT 테킷 스쿨</h5>
          <h3 className="text-Techit_gray-300 text-[26px]">
            K-Digital Training 부트캠프
          </h3>
        </div>
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
      </div>
      <ul className="grid grid-cols-4 justify-items-center gap-6 mt-10">
        {kdtData.map((v, i) => (
          <li key={i} className="bg-red-100 w-[290px] h-[400px]">
            <img
              className="rounded-lg"
              src={`/images/kdts/${v.image}.webp`}
              alt={v.title}
            />
            <div className="mt-4">모집중</div>
            {v.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default KdtSection;
