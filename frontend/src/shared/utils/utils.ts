import { DraggableLocation } from "react-beautiful-dnd";
import {
  ItemRating,
  Layout,
  ListItem,
  SearchItem,
} from "../../interfaces";

export {
  arrayToNArray,
  filterByUniqueField,
  get1and2starAverage,
  getRelativeTimeFormat,
  kFormatter,
  makeListItems,
  move,
  orderBy,
  priceCompare,
  reorder,
  resultsMove,
  arrayToNItems,
  sortBy,
  timeStamptoDate,
};

const timeStamptoDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toDateString();
};
// Impossibly cringe way to flatten an array
// At the time of writing this, I have no internet connection
// feel free to message me, i might've forgotten to revamp this
const sortBy = <T>(arr: ListItem<T>[][], sortmethod: keyof T) => {
  const items: T[] = [];
  arr.map((i) => i.map((itm) => items.push(itm.item)));
  const newArr = makeListItems(orderBy(items, [sortmethod], "asc"));
  return newArr;
};

const arrayToNItems = <T>(arr: T[], n: number) =>
  Array(Math.ceil(arr.length / n))
    .fill(0)
    .map((_, index) => arr.slice(n * index, n + n * index));

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
  const newDestinationItems = destClone;
  return { newDestinationItems };
};

const arrayToNArray = <T>(arr: T[], n: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  const wordsPerLine = Math.ceil(arr.length / 2);
  for (let line = 0; line < n; line++) {
    for (let i = 0; i < wordsPerLine; i++) {
      const value = arr[i + line * wordsPerLine];
      if (!value) continue;
      result[line].push(value);
    }
  }
  return result;
};

const makeListItems = <T>(mainResults: T[]) =>
  mainResults.map((item, index) => {
    const listItem: ListItem<T> = {
      // all id's are created at the same time
      // leading to Date.now not returning unique values
      // we might wanna use an id generator here
      itemid: Date.now() + index,
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

const move = <T>(
  source: ListItem<T>[],
  destination: ListItem<T>[],
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

const getRelativeTimeFormat = (current: any, previous: any) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  // @ts-ignore this type mismatch, should not cause errors,
  // type Date coerce to numbers if used in a math expressiion. weird,ik
  const elapsed = Math.abs(current - previous);

  if (elapsed < msPerHour) {
    const time = Math.round(elapsed / msPerMinute);
    return `${time === 1 ? "a minute" : `${time} minutes`} ago`;
  } else if (elapsed < msPerDay) {
    const time = Math.round(elapsed / msPerHour);
    return `${time === 1 ? "an hour" : `${time} hours`} ago`;
  } else if (elapsed < msPerMonth) {
    const time = Math.round(elapsed / msPerDay);
    return `${time === 1 ? "a day" : `${time} days`} ago`;
  } else if (elapsed < msPerYear) {
    const time = Math.round(elapsed / msPerMonth);
    return `${time === 1 ? "a months" : `${time} monthss`} ago`;
  } else {
    const time = Math.round(elapsed / msPerYear);
    return `${time === 1 ? "a year" : `${time} years`} ago`;
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
    ? // Trims price's padding of 5 zeros
      price.toString().slice(0, price.toString().split("").length - 5)
    : `${price_min
        .toString()
        .slice(0, price_min.toString().split("").length - 5)}-${kFormatter(
        parseInt(
          price_max
            .toString()
            .slice(0, price_max.toString().split("").length - 5)
        )
      )}`;

// Removes duplicates of field T
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
