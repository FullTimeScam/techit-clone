import SocialIcon from "./SocialIcon";

const iconsData = [
  "icon_instagram",
  "icon_youtube",
  "icon_kakaoch",
  "icon_brunch",
  "icon_facebook",
];

const Footer = () => {
  return (
    <footer className="mt-20 lg:mt-40 border-t border-Techit_gray-100">
      <div className="container-style px-6 py-8">
        <div className="flex justify-between items-start">
          <img src="/images/techit_by_likelion_logo.svg" alt="TechIt" />
          <div className="flex justify-between max-w-[300px] w-full">
            <div>
              <h6 className="text-Techit_gray-200 text-xs">모든 교육 경험</h6>
              <nav className="flex flex-col text-sm font-semibold gap-3 mt-4">
                <button className="text-left">KDT 테킷 스쿨</button>
                <button className="text-left">온보딩 트랙</button>
                <button className="text-left">스타트업 스테이션</button>
                <button className="text-left">!T 트렌드</button>
                <button className="text-left">이벤트</button>
                <button className="text-left">기업 해커톤</button>
              </nav>
            </div>
            <div>
              <div className="flex flex-col text-sm font-semibold gap-3 mt-4">
                <h6 className="text-Techit_gray-200 text-xs">회사 소개</h6>
                <nav>
                  <button className="text-left flex items-center gap-1">
                    LIKELION
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </button>
                  <button className="text-left flex items-center gap-1">
                    채용
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-Techit_gray-100"></div>
        <nav className="mt-5 md-6 flex gap-3">
          {iconsData.map((v, i) => (
            <SocialIcon key={i} image={v} />
          ))}
        </nav>
        <div className="flex items-center text-Techit_gray-200 gap-2 text-xs">
          이용약관
          <span className="w-1 h-1 bg-techit-gray-200 rounded-full inline-block" />
          개인정보처리방침
          <span className="w-1 h-1 bg-techit-gray-200 rounded-full inline-block" />
          환불규정
        </div>
        <div className="mt-3 text-Techit_gray-200 gap-1 text-xs flex items-center">
          상호명: 멋쟁이사자처럼
          <span className="border-l border-techit-gray-200 inline-block w-[1px] h-[10px]" />
          대표: 나성영contact@likelion.net
          <span className="border-l border-techit-gray-200 inline-block w-[1px] h-[10px]" />
          사업자 번호 : 264-88-01106
          <span className="border-l border-techit-gray-200 inline-block w-[1px] h-[10px]" />
          통신판매업 신고번호 : 2022-서울종로-1534
        </div>
        <div className="text-Techit_gray-200 gap-2 text-xs mt-1">
          주소 : 서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층
          <span />
          Copyright © 2022 멋쟁이사자처럼 All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
