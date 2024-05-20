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
          <li key={i} className="w-[290px] h-[416px]">
            <div className="overflow-hidden rounded-lg">
              <img
                className="rounded-lg hover:scale-110 duration-300"
                src={`/images/kdts/${v.image}.webp`}
                alt={v.title}
              />
            </div>
            <div
              className={`${
                v["d-day"] === "ing"
                  ? "text-[#1d4ed8] border-[#1d4ed8]"
                  : v["d-day"] === "alarm"
                  ? "text-[#059669] border-[#059669]"
                  : "text-[#3f3f46] border-[#3f3f46]"
              }mt-4 border text-sm font-semibold py-1 px-2 rounded w-fit`}
            >
              {v["d-day"] === "ing"
                ? "모집중"
                : v["d-day"] === "alarm"
                ? "사전알림신청"
                : "모집마감"}
            </div>
            <div className="text-xl font-semibold mb-2 mt-4">{v.title}</div>
            <div className="text-lg">{v.description}</div>
            <div className="text-Techit_gray-150 mt-4">{v.period}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default KdtSection;
