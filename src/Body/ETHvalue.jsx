import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";

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
          backgroundColor: "#1C1731",
          border: "1px solid rgba(110, 86, 248, 0.25);",
        }}
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            color: "#fff",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "22px",
          }}
          readOnly={true}
          placeholder="0.00"
          inputProps={{ "aria-label": "search chains" }}
        />

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
    </div>
  );
}
