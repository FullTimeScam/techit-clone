import { useEffect } from "react";
import { useState } from "react";

const ClassButton = ({ name, classCardComps, setClassCardComps }) => {
  const [isClicked, setIsClicked] = useState();

  const onClickClass = () => {
    setIsClicked(!isClicked);
  };
  useEffect(() => {
    if (isClicked) {
      setClassCardComps([...classCardComps, name]);
    } else {
      const temp = classCardComps.filter((v) => {
        if (v !== name) {
          return v;
        }
      });
      setClassCardComps(temp);
    }
  }, [isClicked]);

  return (
    <button
      className={`${
        isClicked
          ? "border-Techit_orange text-Techit_orange bg-[#fff7ed]"
          : "border-Techit_gray-100"
      } px-3 py-2 text-lg border rounded-md`}
      onClick={onClickClass}
    >
      {name}
    </button>
  );
};

export default ClassButton;
