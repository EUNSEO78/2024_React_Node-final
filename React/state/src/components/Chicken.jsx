import { useState } from "react";

const Chicken = () => {
  const evolution = ["🥚", "🐣", "🐥", "🐓", "🍗"];
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prev) => {
      if (prev == evolution.length - 1) {
        alert("마지막 스탭입니다.");
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  const prevStep = () => {
    setStep((prev) => {
      if (prev == 0) {
        alert("맨 처음 스탭입니다.");
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <>
      <button onClick={prevStep}>PREVIOUS STEP</button>
      <span>{evolution[step]}</span>
      <button onClick={nextStep}>NEXT STEP</button>
    </>
  );
};

export default Chicken;
