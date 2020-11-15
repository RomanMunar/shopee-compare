import React, { useEffect, useRef, useState } from "react";
import Flex from "../../../components/Flex";
import { Icon, Trophy } from "../../../components/Icon";
import { Select } from "../../../components/Select";
import { ToolbarButton } from "../../../components/Toolbar";
import { Toolbar } from "../../../components/Toolbar/Styles";
import { IconType, SearchItem } from "../../../interfaces";
import { useUI } from "../../../shared/contexts/useUIContext";
import { useKeyPress } from "../../../shared/hooks/useKeyPressed";
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
  const [sortOption, setSorOption] = useState<
    "price" | "rating" | "sales" | "likes" | "name"
  >("price");
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [reponses, setReponses] = useState<SearchItem[]>(
    filterByUniqueField(selectedItems, "itemid")
  );
  const $summaryRef = useRef<HTMLDivElement>(null);
  const keyPressed = useKeyPress("Escape");
  useEffect(() => {
    if (keyPressed) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPressed]);
  useOnOutsideClick($summaryRef, () => {
    handleClose();
  });
  const handleClose = () => {
    closeOverlay();
    closeCompareSummary();
  };
  const byName = () =>
    setReponses(
      selectedItems.sort(function (a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
    );
  const byPrice = () =>
    setReponses(selectedItems.sort((a, b) => a.price - b.price));
  const byRating = () =>
    setReponses(
      selectedItems.sort(
        (a, b) => a.item_rating.rating_count[0] - b.item_rating.rating_count[0]
      )
    );
  useEffect(() => {
    switch (sortOption) {
      case "name":
        byName();
        break;
      case "price":
        byPrice();
        break;
      case "sales":
        bySales();
        break;
      case "rating":
        byRating();
        break;
      case "likes":
        byLikes();
        break;
    }
  }, [sortOption]);
  const bySales = () =>
    setReponses(selectedItems.sort((a, b) => b.sold - a.sold));
  const byLikes = () =>
    setReponses(selectedItems.sort((a, b) => b.liked_count - a.liked_count));
  // Note: For consistency, I named them type instead of icon
  const headings: { name: string; type: IconType }[] = [
    { name: "Name", type: "Product" },
    { name: "Price", type: "Price" },
    { name: "Rating", type: "Star" },
    { name: "Sales", type: "Sales" },
    { name: "Likes", type: "Like" },
  ];
  const randomNum = () => parseInt(((Math.random() * 10) / 4).toFixed()); // random from 0-2

  useEffect(() => {
    openOverlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DialogWrapper guide='search' ref={$summaryRef}>
      <ToolbarWrapper>
        <Toolbar place='right-top'>
          Export to PDF
          <ToolbarButton
            tooltipPlace='bottom'
            name='Export to PDF'
            icon='Pdf'
          />
        </Toolbar>
        <Toolbar place='right-top'>
          <Select
            selectedOption={sortOption}
            setSelectedOption={setSorOption}
            title='Price'
            lead='By '
            options={["price", "rating", "sales", "likes", "name"]}
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
