import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import ActionAlerts from "./ActionAlerts";
import { useState } from "react";


export default function Listfood(props) {
const [done,setdone] = useState(false);
    const { close } = props;
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const items = [
    { logo: "🍕", name: "Pizaa" },
    { logo: "🍔", name: "Burger" },
    { logo: "🍣", name: "Sushi" },
    { logo: "🍝", name: "Pasta" },
    { logo: "🍰", name: "Desserts" },
  ];

  return (
    <div>
      <h1>Our Menu</h1>
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {items.map((value) => {
          const labelId = `checkbox-list-secondary-label-${value.name}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value.name)}
                  checked={checked.indexOf(value.name) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemText
                  id={labelId}
                  primary={`${value.logo} ${value.name}`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <button
        onClick={() => {
          setdone(true);
        }}
      >
        Done
      </button>
      {done&&<ActionAlerts/>}
    </div>
  );
}
