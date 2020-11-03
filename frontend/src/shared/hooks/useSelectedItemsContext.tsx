import React, { createContext, ReactNode, useState } from "react";
import { SearchItem } from "../../interfaces";
import { mockData } from "../../Search/mochResponses";
import { filterByField } from "../utils/utils";

const initialState: {
  selectedItems: SearchItem[];
  setSelectedItems: React.Dispatch<React.SetStateAction<SearchItem[]>>;
} = {
  selectedItems: [],
  setSelectedItems: () => [{}],
};

export const SelectedItemsContext = createContext(initialState);
export default function SelectedItemsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedItems, setSelectedItems] = useState<SearchItem[]>(filterByField(mockData,"itemid"));

  return (
    <SelectedItemsContext.Provider value={{ selectedItems, setSelectedItems }}>
      {children}
    </SelectedItemsContext.Provider>
  );
}
