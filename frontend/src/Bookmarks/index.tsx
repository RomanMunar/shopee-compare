import React from "react";
import Container from "../components/Container";
import { SearchItem } from "../interfaces";
import { mockData } from "../Search/mochResponses";
import { filterByField } from "../shared/utils/utils";

const Bookmarks = () => {
  const reponses: SearchItem[] = filterByField(mockData, "itemid");

  return <Container> Bookmarks </Container>;
};

export default Bookmarks;
