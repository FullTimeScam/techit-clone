import { useState } from "react";
import TitleBar from "./TitleBar";
import ClassButton from "./ClassButton.jsx";
import ClassCard from "./ClassCard.jsx";

const ScheduleData = [
  { name: "프론트엔드" },
  { name: "백엔드 : Java" },
  { name: "백엔드 : Python" },
  { name: "앱스쿨 : iOS" },
  { name: "AI 스쿨" },
  { name: "앱스쿨 : Android" },
  { name: "데이터 분석" },
  { name: "디자인" },
  { name: "블록체인" },
  { name: "스타트업 스테이션" },
  { name: "프론트엔드 심화" },
  { name: "백엔드 심화" },
];

const ScheduleSection = () => {
  const [isClass, setIsClass] = useState(true);

  const [classCardComps, setClassCardComps] = useState([]);

  return (
    <section className="mt-10 lg:mt-20 container-styl px-6">
      <TitleBar
        title="테킷 스쿨 일정 확인하기"
        description="한 눈에 보는 테킷 스쿨 오픈 일정"
      />
      <div className="mt-5 border-b border-Techit_gray-100">
        <button
          className={`${
            isClass ? "text-Techit_orange" : "text-Techit_gray-200"
          } font-normal text-xl  mr-5 h-[38px]`}
          onClick={() => setIsClass(true)}
        >
          클래스 별
        </button>
        <button
          className={`${
            isClass ? "text-Techit_gray-200" : "text-Techit_orange"
          } font-normal text-xl  mr-5 h-[38px]`}
          onClick={() => setIsClass(false)}
        >
          월별로 보기
        </button>
      </div>
      <h6 className="mt-8 mb-6 text-xl font-semibold">
        관심있는 클래스를 선택해주세요.
      </h6>
      <div className="border border-Techit_gray-100 rounded-lg p-6 flex flex-wrap gap-[10px]">
        {/*flex-wrap을 하면 요소들이 찌그러지지 않고 줄바꿈이 됨*/}
        {ScheduleData.map((v, i) => (
          <ClassButton
            key={i}
            name={v.name}
            classCardComps={classCardComps}
            setClassCardComps={setClassCardComps}
          />
        ))}
      </div>
      <ul>
        {classCardComps.map((v, i) => (
          <li key={v + i}>{v}</li>
        ))}
      </ul>
      <ul>
        <ClassCard />
      </ul>
    </section>
  );
};

export default ScheduleSection;
