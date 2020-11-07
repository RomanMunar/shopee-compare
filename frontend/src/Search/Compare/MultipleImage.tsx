import React, { useState } from "react";
import styled from "styled-components";
import { ToolbarButton } from "../../components/Toolbar";
import { Layout } from "../../interfaces";
import { mixin, shadows } from "../../shared/styles";

interface Props {
  srcs: string[];
  on?: "selection" | "ratings" | "compare" | "main";
  layout?: Layout;
}

export const MultipleImage = ({ layout, srcs, on }: Props) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  return (
    <CompareItemFixed layout={layout}>
      <div>
        <CompareItemImage
          layout={layout}
          on={on}
          active
          src={"https://cf.shopee.ph/file/" + srcs[currentIndex]}
        />
        <ArrowContainer>
          <ToolbarButton
            tooltipPlace='bottom'
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
            tooltipPlace='bottom'
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
      </div>
      <Indexes>
        {srcs.map((src, index) => (
          <IndexCircle
            key={`index-circle-${index}-of-${src}`}
            onClick={() => setcurrentIndex(index)}
            active={currentIndex === index}
          />
        ))}
      </Indexes>
    </CompareItemFixed>
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
  position: absolute;
  bottom: 0;
  height: 15px;
  ${mixin.clickable}
  z-index: 2;
  margin-top: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
`;
const CompareItemFixed = styled.div<{ layout?: Layout }>`
  position: relative;
  background-color: #d2d5dd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 100%;
  padding-bottom: ${(props) => (props.layout === "main" ? "45%" : "60%")};
  ${shadows.shadowLg}
  margin-bottom: 0.3rem;
`;
const CompareItemImage = styled.img<{
  active: boolean;
  on?: "selection" | "ratings" | "compare" | "main";
  layout?: Layout;
}>`
  ${(props) => (props.on === "main" ? "width: 65%;" : "width: 100%;")}
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 0;
`;
