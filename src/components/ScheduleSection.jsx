import { useState } from "react";
import TitleBar from "./TitleBar";
import ClassSection from "./ClassSection";
import MonthSection from "./MonthSection";

const ScheduleSection = () => {
  const [isClass, setIsClass] = useState(true);

  return (
    <section className="mt-10 lg:mt-20 container-style px-6">
      <TitleBar
        title="테킷 스쿨 일정 확인하기"
        description="한 눈에 보는 테킷 스쿨 오픈 일정"
      />
      <div className="mt-5 border-b border-Techit_gray-100">
        <button
          className={`${
            isClass
              ? "text-Techit_orange font-medium border-b-2 border-Techit_orange"
              : "text-Techit_gray-200 font-light"
          } text-xl mr-4 h-[38px]`}
          onClick={() => setIsClass(true)}
        >
          클래스 별
        </button>
        <button
          className={`${
            isClass
              ? "text-Techit_gray-200 font-light"
              : "text-Techit_orange font-medium border-b-2 border-Techit_orange"
          } text-xl mr-4 h-[38px]`}
          onClick={() => setIsClass(false)}
        >
          월별로 보기
        </button>
      </div>
      <h6 className="mt-8 mb-6 text-xl font-semibold">
        관심있는 클래스를 선택해주세요.
      </h6>
      {isClass ? <ClassSection /> : <MonthSection />}
    </section>
  );
};

export default ScheduleSection;
