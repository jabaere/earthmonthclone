import React, { useEffect, useState } from "react";

export function Countdown({ seconds }: any) {
  const [remainingTime, setRemainingTime] = useState(seconds);

  useEffect(() => {
    if (remainingTime >= 0) {
      const timer = setTimeout(() => {
        setRemainingTime(remainingTime - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setRemainingTime(seconds);
    }
  }, [remainingTime, seconds]);

  return (
    <div>
      <p>
        <i>Checking global shares in {remainingTime} seconds</i>
      </p>
    </div>
  );
}
