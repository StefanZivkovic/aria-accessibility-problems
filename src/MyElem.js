import React from "react";
import { MenuItem, Select, InputLabel } from "@material-ui/core";

export const MyCustomElement = () => (
  <div>
    <InputLabel id="my-input">Sort</InputLabel>
    <Select style={{ width: "200px" }} labelId="my-input" label="sort" value="">
      <MenuItem key="item1" value="item1">
        item1
      </MenuItem>
      <MenuItem key="item2" value="item2">
        item2
      </MenuItem>
    </Select>
  </div>
);
