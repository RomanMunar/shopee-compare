import React, { ReactElement } from "react";
import { Icon } from "../../components/Icon";

interface Props {}

function Filter({}: Props): ReactElement {
  return (
    <div>
      <div>
        <label>No ads</label>
        <input type='checkbox' checked />
      </div>
      <div>
        <label>
          Verified <Icon size={16} type='Checkmark' />
        </label>
        <input type='checkbox' />
        <input type='radio' name='' id='' />
      </div>
      <div>
        <label>
          No adult
          <Icon size={16} type='Fire' />
        </label>
        <input type='checkbox' />
      </div>
      <div>
        <label>
          No adult
          <Icon size={16} type='PriceLow' />
        </label>
        <input type='checkbox' />
      </div>
    </div>
  );
}

export default Filter;
