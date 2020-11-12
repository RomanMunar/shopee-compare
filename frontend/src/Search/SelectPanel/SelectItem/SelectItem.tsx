import React, { useState } from "react";
import { Icon } from "../../../components/Icon";
import { SearchItem } from "../../../interfaces";
import { ResultItemImage } from "../../Results/ResultItemImage";
import { Item, ItemText } from "../SelectPanel.styles";

interface Props {
  item: SearchItem;
  onRemoveClick: (itemid: number) => void;
}

const SelectItem = ({ item, onRemoveClick }: Props) => {
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  return (
    <Item
      key={`initialItem-${item.itemid}`}
      onMouseEnter={() => setShowCloseIcon(true)}
      onMouseLeave={() => setShowCloseIcon(false)}
    >
      {showCloseIcon && (
        <div
          onClick={() => onRemoveClick(item.itemid)}
          style={{ position: "absolute", right: 0, top: "5px" }}
        >
          <Icon type='Delete' size={13} />
        </div>
      )}
      <ResultItemImage src={item.image} direction='left' />
      <ItemText>
        {item.name
          .replace(/[^a-zA-Z0-9 ]/g, "")
          .split("")
          .slice(0, 50)}
        ...
      </ItemText>
    </Item>
  );
};

export default SelectItem;
