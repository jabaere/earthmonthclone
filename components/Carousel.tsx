import React from "react";

import Marquee from "react-fast-marquee";

const TextItems = ({ index }: { index: number }) => {
  return (
    <p
      style={{
        margin: "5px",
        padding: "15px 0",
        fontFamily: "CustomFont",
        fontSize: "2.5vh",
        textTransform: "uppercase",
      }}
    >
      Total Trees Planted – {index}
    </p>
  );
};

const CarouselText = () => (
  <Marquee
    className="container"
    speed={40}
    loop={0}
    gradient={false}
    style={{
      backgroundColor: "#168a43",
      color: "white",
      height: "5vh",
    }}
  >
    {[1, 2, 3, 4].map((_, index) => (
      <TextItems index={index} />
    ))}
  </Marquee>
);

export default CarouselText;
