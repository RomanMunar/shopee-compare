import { DraggableLocation } from "react-beautiful-dnd";
import { SearchItem } from "../../interfaces";

export const kFormatter = (num: number) =>
  Math.abs(num) > 999 ? (Math.abs(num) / 1000).toFixed(1) + "k" : Math.abs(num);

export const priceCompare = ({
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

export const filterByField = (array: any[], field: string) => {
  const displayedResults: SearchItem[] = [];
  array.filter(function (item) {
    return displayedResults.findIndex((x: any) => x[field] === item[field]) ===
      -1
      ? displayedResults.push(item)
      : null;
  });
  return displayedResults;
};

export const reorder = (
  list: SearchItem[],
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export function moveBetween<T>({
  list1,
  list2,
  source,
  destination,
}: MoveBetweenArgs<T>): MoveBetweenResult<T> {
  const newFirst = Array.from(list1.values);
  const newSecond = Array.from(list2.values);

  const moveFrom = source.droppableId === list1.id ? newFirst : newSecond;
  const moveTo = moveFrom === newFirst ? newSecond : newFirst;

  const [moved] = moveFrom.splice(source.index, 1);
  moveTo.splice(destination.index, 0, moved);

  return {
    list1: {
      ...list1,
      values: newFirst,
    },
    list2: {
      ...list2,
      values: newSecond,
    },
  };
}

type List<T> = {
  id: string;
  values: T[];
};
type MoveBetweenArgs<T> = {
  list1: List<T>;
  list2: List<T>;
  source: DraggableLocation;
  destination: DraggableLocation;
};
type MoveBetweenResult<T> = {
  list1: List<T>;
  list2: List<T>;
};
