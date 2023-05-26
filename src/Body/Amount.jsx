import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import "./Amount.css"

export default function CustomizedInputBase(props) {
  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          marginTop: "-30px",
          display: "flex",
          width: "343px",
          height: "50px",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "#0b0819",
          border: "1px solid rgba(110, 86, 248, 0.25);",
        }}
      >
        <InputBase
          id="input"
          sx={{
            ml: 1,
            flex: 1,
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "22px",
          }}
          placeholder="0.00"
          inputProps={{ "aria-label": "search chains" }}
          type="number"
        />
        <IconButton
          type="button"
          sx={{ p: "10px", color: "#fff", fontSize: "15px" }}
          aria-label="search"
        >
          INR
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
    </div>
  );
}
