import React, { useRef } from "react";
import { Icon, TrophyIcon } from "../../../components/Icon";
import Flex from "../../../components/Flex";
import { filterByField, priceCompare } from "../../../shared/utils/utils";
import { Toolbar } from "../../../components/Toolbar/Styles";
import { ToolbarButton } from "../../../components/Toolbar";
import { IconType, SearchItem } from "../../../interfaces";
import { mockData } from "../../mochResponses";
import { Small } from "../../Results/Results.styles";
import { Item } from "../../SelectPanel/SelectPanel.styles";
import { ResultItemImage } from "../../Results/ResultItemImage";
import useOnOutsideClick from "../../../shared/hooks/useOnOutsideClick";
import {
  Overlay,
  ProductTitle,
  TableWrapper,
  ToolbarWrapper,
  HeadingWrapper,
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableData,
} from "./CompareSummary.styles";

interface Props {
  setShowCompareSummary: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompareSummary = ({ setShowCompareSummary }: Props) => {
  const reponses: SearchItem[] = filterByField(mockData, "itemid");
  const $summaryRef = useRef<HTMLDivElement>(null);
  useOnOutsideClick($summaryRef, () => setShowCompareSummary(false));
  // Note: I named them type instead of icon for consistency
  const headings: { name: string; type: IconType }[] = [
    { name: "Product", type: "Product" },
    { name: "Price", type: "Price" },
    { name: "Rating", type: "Star" },
    { name: "Sales", type: "Sales" },
    { name: "Stars", type: "Like" },
  ];
  const randomNum = () => parseInt(((Math.random() * 10) / 4).toFixed());

  return (
    <Overlay>
      <TableWrapper ref={$summaryRef}>
        <ToolbarWrapper>
          <Toolbar place='right-top'>
            Export to PDF
            <ToolbarButton
              tooltipPlace='bottom'
              name='Export to PDF'
              icon='Pdf'
            />
          </Toolbar>
        </ToolbarWrapper>
        <Table>
          <TableHeader style={{ lineHeight: "40px" }}>
            <TableRow>
              {headings.map(({ type, name }) => (
                <TableHead>
                  <HeadingWrapper>
                    <Icon type={type} size={18} />
                    <span>{name}</span>
                  </HeadingWrapper>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {reponses.map((r, index) => {
              const types: ["gold", "silver", "bronze"] = [
                "gold",
                "silver",
                "bronze",
              ];
              const { price, price_max, price_min } = r;
              return (
                <tr style={{ background: index ? "none" : "#dadada" }}>
                  <TableData>
                    <Item>
                      <ResultItemImage src={r.image} direction='left' />
                      <ProductTitle>
                        {r.name.replace(/[^a-zA-Z0-9 ]/g, "")}
                      </ProductTitle>
                    </Item>
                  </TableData>
                  <TableData>
                    <TrophyIcon type={types[randomNum()]} size={13} />
                    {priceCompare({ price, price_max, price_min })}
                  </TableData>
                  <TableData>
                    <Flex align='center' justify='center' wrap='nowrap'>
                      <TrophyIcon type={types[randomNum()]} size={13} />
                      <span>{r.item_rating.rating_star.toFixed(1)}</span>
                    </Flex>
                  </TableData>
                  <TableData>
                    <Flex align='center' justify='center' wrap='nowrap'>
                      <TrophyIcon type={types[randomNum()]} size={13} />
                      <div>
                        {r.sold}
                        <Small on='compare'> sold/mon </Small>
                      </div>
                    </Flex>
                  </TableData>
                  <TableData>
                    <Flex align='center' justify='center' wrap='nowrap'>
                      <TrophyIcon type={types[randomNum()]} size={13} />
                      <span>{r.liked_count}</span>
                    </Flex>
                  </TableData>
                </tr>
              );
            })}
          </TableBody>
        </Table>
      </TableWrapper>
    </Overlay>
  );
};

export default CompareSummary;
