import React, { useState } from "react";
import { ToolbarButton } from "../../../components/Toolbar";
import { Layout } from "../../../interfaces";
import {
  ArrowContainer,
  CompareItemFixed,
  CompareItemImage,
  Indexes,
  SubImages
} from "./MultipleImage.styles";

interface Props {
  srcs: string[];
  on?: "selection" | "ratings" | "compare" | "main";
  layout?: Layout;
}

export const MultipleImage = ({ layout, srcs, on }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div style={{ width: "100%" }}>
        <CompareItemFixed layout={layout}>
          <div>
            {on !== "ratings" && (
              <CompareItemImage
                layout={layout}
                on={on}
                active
                // src={"https://cf.shopee.ph/file/" + srcs[currentIndex]}
                src={"https://cf.shopee.ph/file/" + srcs[currentIndex]}
              />
            )}
            {on !== "selection" && (
              <ArrowContainer>
                <ToolbarButton
                  tooltipPlace='bottom'
                  icon='ArrowLeftC'
                  name='Prev'
                  size={28}
                  onClick={() =>
                    currentIndex !== 0
                      ? setCurrentIndex(currentIndex - 1)
                      : setCurrentIndex(srcs.length - 1)
                  }
                />
                <ToolbarButton
                  tooltipPlace='bottom'
                  name='Next'
                  icon='ArrowRightC'
                  size={28}
                  onClick={() =>
                    srcs.length > currentIndex + 1
                      ? setCurrentIndex(currentIndex + 1)
                      : setCurrentIndex(0)
                  }
                />
              </ArrowContainer>
            )}
          </div>
        </CompareItemFixed>
      </div>
      {on === "main" && (
        <div
          style={{
            position: "relative",
            minHeight: "70px",
            width: "100%",
            overflowX: "scroll",
            background: "#131417de",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
            }}
          >
            <Indexes>
              {srcs.map((src, index) => (
                <SubImages
                  onClick={() => setCurrentIndex(index)}
                  active={currentIndex === index}
                  key={`index-${index}-of-${src}`}
                  src={"https://cf.shopee.ph/file/" + src}
                />
              ))}
            </Indexes>
          </div>
        </div>
      )}
    </>
  );
};

export default MultipleImage;
