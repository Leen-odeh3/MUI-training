import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "./Create.scss";
import { Box } from "@mui/material";
import { purple } from "@mui/material/colors";
import EastIcon from "@mui/icons-material/East";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Create = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
    width: "120px",
    margin: "auto",
    marginTop: "30px",
  }));

  return (
    <Box
      sx={{
        marginLeft: "200px",
        display: "flex",
        flexDirection: "column",
        paddingTop: "60px",
        margin: "auto",
        width: "380px",
      }}
      component="form"
    >
      <TextField
        label="Transaction Title"
        id="standard-start-adornment"
        sx={{ marginBottom: "30px", width: "100%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EastIcon />{" "}
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
      <TextField
        label="Transaction Title"
        id="standard-start-adornment"
        sx={{ width: "100%" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton variant="contained">
        Submit <KeyboardArrowRightIcon />
      </ColorButton>
    </Box>
  );
};

export default Create;
