import React, { FC, useEffect, useState, ReactNode } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

interface Props {
  children: ReactNode;
}
export const Carousel: FC<Props> = ({ children }) => {
  //? states
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [count, setCount] = useState(0);

  //? functions
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = count - 1;
    } else if (newIndex >= count) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const getDotStyles = (index: number, activeIndex: number) => {
    const baseStyles: any = {
      backgroundColor: "white",
      width: index === activeIndex ? "8px" : "4px",
      borderRadius: "0.375rem",
      transitionDuration: "200ms",
      height: "1px",
      cursor: "pointer",
    };

    if (index !== activeIndex) {
      baseStyles.opacity = "0.1";
    }

    return baseStyles;
  };

  const onPrevious = () => {
    setActiveIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };
  const onNext = () => {
    setActiveIndex((prevIndex) =>
      Math.min(React.Children.count(children), prevIndex + 1)
    );
  };

  useEffect(() => {
    setCount(React.Children.count(children));
  }, [children]);

  return (
    <div
      {...handlers}
      style={{
        overflow: "hidden",
        zIndex: 10,
        width: "100%",
      }}
      // onMouseEnter={() => setPaused(true)}
      // onMouseLeave={() => setPaused(false)}
    >
      <div
        style={{
          transition: "all",
          transitionDuration: "200",
          whiteSpace: "nowrap",
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {React.Children.map(children, (child: any, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          width: "100%",
          marginTop: 64,
        }}
      >
        <Image
          onClick={onPrevious}
          src={
            activeIndex === 0
              ? "/images/disabled-arrow.svg"
              : "/images/enabled-arrow.svg"
          }
          style={{
            rotate: activeIndex !== 0 ? "rotate(-180deg)" : undefined,
          }}
          width={28}
          height={29}
          alt="left-arrow"
        />
        {activeIndex + 1} / {React.Children.count(children)}
        <Image
          onClick={onNext}
          src={
            activeIndex === React.Children.count(children) - 1
              ? "/images/disabled-arrow.svg"
              : "/images/enabled-arrow.svg"
          }
          style={{
            rotate:
              activeIndex !== React.Children.count(children) - 1
                ? "rotate(180deg)"
                : undefined,
          }}
          width={28}
          height={29}
          alt="right-arrow"
        />
      </div>
    </div>
  );
};
