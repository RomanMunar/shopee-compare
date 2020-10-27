import React, { ReactElement, useState } from "react";
import { SearchItem } from "../interfaces";
import { useQueryParams } from "../shared/hooks/useQueryParams";
import Searchbar from "./Searchbar";
import Results from "./Results";
import { Label, SearchPanel } from "./Styles";
import Toolbar from "./Toolbar";
import Compare from "./Compare/index";
import Container from "../components/Container";
import { DragDropContext } from "react-beautiful-dnd";
import { filterByField, reorder } from "../shared/utils/utils";
import { mockData } from "./mochResponses";

export default (): ReactElement => {
  let query = useQueryParams().get("keyword");
  const [results] = useState<SearchItem[]>(filterByField(mockData, "itemid"));
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false);
  // const onDragEnd = (result: DropResult) => {
  //   // dropped outside the list
  //   if (!result.destination) {
  //     return;
  //   }

  //   const newItems = reorder(
  //     items,
  //     result.source.index,
  //     result.destination.index
  //   );

  //   setItems(newItems);
  // };

  return (
    <Container>
      <Toolbar
        isSearchPanelOpen={isSearchPanelOpen}
        setIsSearchPanelOpen={setIsSearchPanelOpen}
      />
      {/* <DragDropContext onDragEnd={onDragEnd}> */}
      <SearchPanel isSearchPanelOpen={isSearchPanelOpen}>
        <Searchbar />
        <Label>Search results for "{query}"</Label>
        <Results results={results} />
      </SearchPanel>
      <Compare results={results} />
      {/* </DragDropContext> */}
      {/* 
        CompareContainer{
          items.length ? 
            CompareItem 
              Title, Images, Model, Price...
          :<BlankDashedContainer/>
          }
       */}
    </Container>
  );
};
