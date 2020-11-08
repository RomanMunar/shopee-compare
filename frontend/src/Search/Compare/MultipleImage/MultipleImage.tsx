import React, { useState } from "react";
import { ToolbarButton } from "../../../components/Toolbar";
import { Layout } from "../../../interfaces";
import {
  ArrowContainer,
  IndexCircle,
  Indexes,
  CompareItemFixed,
  CompareItemImage,
} from "./MultipleImage.styles";

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

export default MultipleImage