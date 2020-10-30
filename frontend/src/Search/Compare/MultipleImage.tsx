import React, { useState } from "react";
import styled from "styled-components";
import { ToolbarButton } from "../../components/Toolbar";
import { mixin, shadows } from "../../styles";

interface Props {
  srcs: string[];
  on?: "ratings" | "compare";
}

export const MultipleImage = ({ srcs, on }: Props) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  return (
    <>
      <CompareItemFixed>
        <CompareItemImage
          active
          src={"https://cf.shopee.ph/file/" + srcs[currentIndex]}
        />
        <ArrowContainer>
          <ToolbarButton
            icon='ArrowLeftC'
            name='Prev'
            size={28}
            onClick={() =>
              currentIndex !== 0
                ? setcurrentIndex(currentIndex - 1)
                : setcurrentIndex(srcs.length - 1)
            }
          />
          <ToolbarButton
            name='Next'
            icon='ArrowRightC'
            size={28}
            onClick={() =>
              srcs.length > currentIndex + 1
                ? setcurrentIndex(currentIndex + 1)
                : setcurrentIndex(0)
            }
          />
        </ArrowContainer>
      </CompareItemFixed>
      <Indexes>
        {srcs.map((src, index) => (
          <IndexCircle
            onClick={() => setcurrentIndex(index)}
            active={currentIndex === index}
          />
        ))}
      </Indexes>
    </>
  );
};

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const IndexCircle = styled.div<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? "#252526" : "rgba(37, 37, 38, 0.5)"};
  border-radius: 50%;
  padding: 5px;
  margin-right: 2px;
`;

const Indexes = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(37, 37, 38, 0.27));
  width: 100%;
  height: 15px;
  ${mixin.clickable}
  z-index: 2;
  margin-top: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
`;
const CompareItemFixed = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-right: 100%;
  padding-bottom: 60%;
  ${shadows.shadowLg}
  margin-bottom: 0.3rem;
`;
const CompareItemImage = styled.img<{ active: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* What the fuck am i dumb?*/
  /* TODO animate this  */
  /* transition: all 0.2s;
  transition-property: all;
  visibility: hidden;
  opacity: 0;
  transform: ${(props) =>
    props.active ? "translateX()" : "translateX(-80px)"};
  visibility: ${(props) => props.active && "visible"};
  opacity: ${(props) => props.active && 1}; */
`;
