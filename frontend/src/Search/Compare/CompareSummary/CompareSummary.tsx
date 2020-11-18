import html2canvas from "html2canvas";
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
  const [responses, setResponses] = useState<SearchItem[]>(
    filterByUniqueField(selectedItems, "itemid")
  );
  const $summaryRef = useRef<HTMLDivElement>(null);
  const keyPressed = useKeyPress("Escape");
  const byName = (items: SearchItem[]) =>
    items.sort(function (a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  const byPrice = (items: SearchItem[]) =>
    items.sort((a, b) => a.price - b.price);
  const byRating = (items: SearchItem[]) =>
    items.sort(
      (a, b) => a.item_rating.rating_count[0] - b.item_rating.rating_count[0]
    );
  const bySales = (items: SearchItem[]) =>
    items.sort((a, b) => b.sold - a.sold);
  const byLikes = (items: SearchItem[]) =>
    items.sort((a, b) => b.liked_count - a.liked_count);

  const winnersCalculate = {
    name: [...byName(selectedItems).map((i) => i.itemid)],
    rating: [...byRating(selectedItems).map((i) => i.itemid)],
    sales: [...bySales(selectedItems).map((i) => i.itemid)],
    likes: [...byLikes(selectedItems).map((i) => i.itemid)],
    price: [...byPrice(selectedItems).map((i) => i.itemid)],
  };

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
  useEffect(() => {
    switch (sortOption) {
      case "name":
        setResponses(byName(responses));
        break;
      case "price":
        setResponses(byPrice(responses));
        break;
      case "sales":
        setResponses(bySales(responses));
        break;
      case "rating":
        setResponses(byRating(responses));
        break;
      case "likes":
        setResponses(byLikes(responses));
        break;
    }
  }, [sortOption]);
  // Note: For consistency, I named them type instead of icon
  const headings: { name: string; type: IconType }[] = [
    { name: "Name", type: "Product" },
    { name: "Price", type: "Price" },
    { name: "Rating", type: "Star" },
    { name: "Sales", type: "Sales" },
    { name: "Likes", type: "Like" },
  ];
  const onExport = () => {
    const screenshotTarget: HTMLElement =
      document.querySelector(`#summary`) || document.body;

    html2canvas(screenshotTarget).then((canvas) => {
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let link = document.createElement("a"); // Which creates anchor tag
      link.href = image; // data:image/octet-stream;base64,iVBORw0KGgoAAAAAAAA...
      link.download = "image.png"; // New image name
      link.innerHTML = "Download";
      link.click();
    });
  };
  useEffect(() => {
    openOverlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DialogWrapper guide='search' ref={$summaryRef}>
      <ToolbarWrapper>
        <Toolbar onClick={onExport} place='right-top'>
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
      <Table id='summary'>
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
          {responses.map((r, index) => {
            const types: ["gold", "silver", "bronze"] = [
              "gold",
              "silver",
              "bronze",
            ];
            const { price, price_max, price_min } = r;
            return (
              <tr style={{ background: index % 2 ? "none" : "#dadada" }}>
                <TableData>
                  <Item>
                    <ResultItemImage src={r.image} direction='left' />
                    <ProductTitle>{r.name}</ProductTitle>
                  </Item>
                </TableData>
                <TableData>
                  {winnersCalculate.price.slice(0, 3).includes(r.itemid) ? (
                    <Trophy
                      type={
                        types[
                          winnersCalculate.price.findIndex(
                            (p) => p === r.itemid
                          )
                        ]
                      }
                      size={13}
                    />
                  ) : (
                    winnersCalculate.price.findIndex((p) => p === r.itemid) +
                    1 +
                    "th "
                  )}
                  ₱{priceCompare({ price, price_max, price_min })}
                </TableData>
                <TableData>
                  <Flex align='center' justify='center' wrap='nowrap'>
                    {winnersCalculate.rating.slice(0, 3).includes(r.itemid) ? (
                      <Trophy
                        type={
                          types[
                            winnersCalculate.rating.findIndex(
                              (p) => p === r.itemid
                            )
                          ]
                        }
                        size={13}
                      />
                    ) : (
                      <span>
                        {winnersCalculate.rating.findIndex(
                          (p) => p === r.itemid
                        ) +
                          1 +
                          "th "}
                      </span>
                    )}
                    <span>{r.item_rating.rating_star.toFixed(1)}</span>
                  </Flex>
                </TableData>
                <TableData>
                  <Flex align='center' justify='center' wrap='nowrap'>
                    {winnersCalculate.sales.slice(0, 3).includes(r.itemid) ? (
                      <Trophy
                        type={
                          types[
                            winnersCalculate.sales.findIndex(
                              (p) => p === r.itemid
                            )
                          ]
                        }
                        size={13}
                      />
                    ) : (
                      <span>
                        {winnersCalculate.sales.findIndex(
                          (p) => p === r.itemid
                        ) +
                          1 +
                          "th "}
                      </span>
                    )}
                    <div>
                      {r.sold}
                      <Small on='compare'> sold/mon </Small>
                    </div>
                  </Flex>
                </TableData>
                <TableData>
                  <Flex align='center' justify='center' wrap='nowrap'>
                    {winnersCalculate.likes.slice(0, 3).includes(r.itemid) ? (
                      <Trophy
                        type={
                          types[
                            winnersCalculate.likes.findIndex(
                              (p) => p === r.itemid
                            )
                          ]
                        }
                        size={13}
                      />
                    ) : (
                      <span>
                        {winnersCalculate.likes.findIndex(
                          (p) => p === r.itemid
                        ) +
                          1 +
                          "th "}
                      </span>
                    )}
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
