import { DraggableLocation } from "react-beautiful-dnd";
import { ItemRating, Layout, ListItem, SearchItem } from "../../interfaces";

export {
  resultsMove,
  makeListItems,
  get1and2starAverage,
  move,
  getRelativeTimeFormat,
  kFormatter,
  priceCompare,
  filterByUniqueField,
  reorder,
  orderBy,
};

const orderBy = <T>(arr: T[], props: Array<keyof T>, orders: "desc" | "asc") =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === "desc"
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );

const resultsMove = (
  source: ListItem<SearchItem>[],
  destination: ListItem<SearchItem>[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  let sourceClone = Array.from(source);
  let destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);
  /* 
      uncomment nextline if we want to be able to drag 
      initialselecteditems back to resultsitems  */
  // const newSourceItems = sourceClone;
  // return { newSourceItems, newDestinationItems };
  const newDestinationItems = destClone;

  return { newDestinationItems };
};

const makeListItems = <T>(mainResults: T[]) =>
  mainResults.map((item, itemid) => {
    const listItem: ListItem<T> = {
      itemid,
      item,
    };
    return listItem;
  });

const get1and2starAverage = (item_rating: ItemRating) =>
  parseInt(
    Math.abs(
      ((item_rating.rating_count[1] + item_rating.rating_count[2]) /
        item_rating.rating_count[0]) *
        100
    ).toFixed(1)
  );

const move = (
  source: ListItem<SearchItem>[],
  destination: ListItem<SearchItem>[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation,
  layout: Layout,
  mainLength: number
) => {
  let sourceClone = Array.from(source);
  let destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  if (
    layout === "main" &&
    mainLength >= 1 &&
    droppableSource.droppableId === "SELECTION"
  ) {
    sourceClone.push(destClone[0]);
    destClone = [removed];
  } else if (
    layout === "double" &&
    mainLength >= 2 &&
    droppableSource.droppableId === "SELECTION"
  ) {
    if (droppableDestination.index === 1) {
      sourceClone.push(destClone[0]);
      destClone = [removed, destClone[1]];
    } else {
      sourceClone.push(destClone[1]);
      destClone = [destClone[0], removed];
    }
  } else {
    destClone.splice(droppableDestination.index, 0, removed);
  }
  const newSourceItems = sourceClone;
  const newDestinationItems = destClone;

  return { newSourceItems, newDestinationItems };
};

const getRelativeTimeFormat = (current: Date, previous: Date) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  // @ts-ignore this type mismatch, does not cause errors,
  // dates coerce to numbers if used in a math expressiion. weird,ik
  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return Math.round(elapsed / msPerYear) + " years ago";
  }
};

const kFormatter = (num: number) =>
  Math.abs(num) > 999 ? (Math.abs(num) / 1000).toFixed(1) + "k" : Math.abs(num);

const priceCompare = ({
  price,
  price_max,
  price_min,
}: {
  price: number;
  price_max: number;
  price_min: number;
}) =>
  price === price_max
    ? price.toString().slice(0, price.toString().split("").length - 5)
    : `${price_min
        .toString()
        .slice(0, price_min.toString().split("").length - 5)}-${kFormatter(
        parseInt(
          price_max
            .toString()
            .slice(0, price_max.toString().split("").length - 5)
        )
      )}`;

const filterByUniqueField = <T>(array: T[], field: keyof T) => {
  const displayedResults: T[] = [];
  array.filter(function (item) {
    return displayedResults.findIndex((x) => x[field] === item[field]) === -1
      ? displayedResults.push(item)
      : null;
  });
  return displayedResults;
};

const reorder = (
  list: ListItem<SearchItem>[],
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
