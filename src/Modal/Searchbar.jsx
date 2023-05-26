import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

export default function CustomizedInputBase(props) {

  const [input, setInput] = React.useState("")

  function handelChange(value){
    setInput(value);
    props.onSearch(value);
  }
  return (
    <div>
      <ClearIcon onClick={props.close} sx={{position:"relative",left:"18.5rem",bottom:"1.5rem"}}/>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          marginTop:"-20px",
          display: "flex",
          width: "290px",
          alignItems: "center",
          borderRadius: "30px",
          backgroundColor: "#181627",
          border: "1px solid rgba(110, 86, 248, 0.25);",
        }}
      >
        <IconButton
          type="button"
          sx={{ p: "10px", color: "#fff" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, color: "#fff" }}
          placeholder="Search Chains"
          inputProps={{ "aria-label": "search chains" }}
          type="text"
          value={input}
          onChange={(e) => handelChange(e.target.value)}
        />

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
    </div>
  );
}
