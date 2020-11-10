import React, { useEffect, useRef } from "react";
import Flex from "../../../components/Flex";
import { Icon, Trophy } from "../../../components/Icon";
import { ToolbarButton } from "../../../components/Toolbar";
import { Toolbar } from "../../../components/Toolbar/Styles";
import { IconType, SearchItem } from "../../../interfaces";
import { useUI } from "../../../shared/contexts/useUIContext";
import useOnOutsideClick from "../../../shared/hooks/useOnOutsideClick";
import { filterByUniqueField, priceCompare } from "../../../shared/utils/utils";
import { ResultItemImage } from "../../Results/ResultItemImage";
import { Small } from "../../Results/Results.styles";
import { Item } from "../../SelectPanel/SelectPanel.styles";
import {
  DialogWrapper,
  HeadingWrapper,
  ProductTitle,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  ToolbarWrapper,
} from "./CompareSummary.styles";

const CompareSummary = ({ selectedItems }: { selectedItems: SearchItem[] }) => {
  const { closeCompareSummary, openOverlay, closeOverlay } = useUI();
  const reponses: SearchItem[] = filterByUniqueField(selectedItems, "itemid");
  const $summaryRef = useRef<HTMLDivElement>(null);
  useOnOutsideClick($summaryRef, () => {
    closeOverlay();
    closeCompareSummary();
  });
  // Note: For consistency, I named them type instead of icon
  const headings: { name: string; type: IconType }[] = [
    { name: "Product", type: "Product" },
    { name: "Price", type: "Price" },
    { name: "Rating", type: "Star" },
    { name: "Sales", type: "Sales" },
    { name: "Stars", type: "Like" },
  ];
  const randomNum = () => parseInt(((Math.random() * 10) / 4).toFixed()); // random from 0-2

  useEffect(() => {
    openOverlay();
  }, []);

  return (
    <DialogWrapper guide='compare' ref={$summaryRef}>
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
                  <Trophy type={types[randomNum()]} size={13} />
                  {priceCompare({ price, price_max, price_min })}
                </TableData>
                <TableData>
                  <Flex align='center' justify='center' wrap='nowrap'>
                    <Trophy type={types[randomNum()]} size={13} />
                    <span>{r.item_rating.rating_star.toFixed(1)}</span>
                  </Flex>
                </TableData>
                <TableData>
                  <Flex align='center' justify='center' wrap='nowrap'>
                    <Trophy type={types[randomNum()]} size={13} />
                    <div>
                      {r.sold}
                      <Small on='compare'> sold/mon </Small>
                    </div>
                  </Flex>
                </TableData>
                <TableData>
                  <Flex align='center' justify='center' wrap='nowrap'>
                    <Trophy type={types[randomNum()]} size={13} />
                    <span>{r.liked_count}</span>
                  </Flex>
                </TableData>
              </tr>
            );
          })}
        </TableBody>
      </Table>
    </DialogWrapper>
  );
};

export default CompareSummary;
