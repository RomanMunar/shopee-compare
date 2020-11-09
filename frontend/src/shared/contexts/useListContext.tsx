import React, { createContext, ReactNode, useState } from "react";
import { ListItem, SearchItem } from "../../interfaces";
import { mockData } from "../../App/apireponses/mochResponses";
import { filterByUniqueField } from "../utils/utils";

const initialState: {
  initialSelectedItems: ListItem<SearchItem>[];
  setInitialSelectedItems: React.Dispatch<
    React.SetStateAction<ListItem<SearchItem>[]>
  >;
  results: ListItem<SearchItem>[];
  setResults: React.Dispatch<React.SetStateAction<ListItem<SearchItem>[]>>;
} = {
  initialSelectedItems: [],
  setInitialSelectedItems: () => "",
  results: [],
  setResults: () => "",
};

export const ListsContext = createContext(initialState);
/* 
  Turn this into array list instead of an object,
  indexing an object may return undefined, 
  typescript dunno how to deal with that shit wth ??? ima sleep now
 */
export default function ListsProvider({ children }: { children: ReactNode }) {
  const mainResults = filterByUniqueField(mockData, "itemid");
  const mainResultsList = mainResults.map((item, itemid) => {
    return {
      itemid,
      item,
    };
  });
  const [results, setResults] = useState<ListItem<SearchItem>[]>(
    mainResultsList
  );
  const [initialSelectedItems, setInitialSelectedItems] = useState<
    ListItem<SearchItem>[]
  >([]);

  return (
    <ListsContext.Provider
      value={{
        setInitialSelectedItems,
        initialSelectedItems,
        results,
        setResults,
      }}
    >
      {children}
    </ListsContext.Provider>
  );
}
