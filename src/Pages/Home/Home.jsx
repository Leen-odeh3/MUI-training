import React from "react";
import "./Home.scss";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
  const Items = [
    { title: "Water", price: "$100" },
    { title: "GYM", price: "$50" },
    { title: "pen", price: "$9" },
  ];
  return (
    <Box
      sx={{
        width: `calc(100% - 260px)`,
        marginLeft: "260px",
        padding: "100px",
      }}
    >
      {Items.map((e) => {
        return (
          <Paper
            className="item"
            sx={{
              position: "relative",
              width: "50%",
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
              margin: "auto",
              marginBottom: "10px",
            }}
          >
            <Typography>{e.title}</Typography>
            <Typography sx={{ paddingRight: "30px" }}>{e.price}</Typography>
            <IconButton sx={{ position: "absolute", top: "0px", right: "1px" }}>
              <CloseIcon />
            </IconButton>
          </Paper>
        );
      })}
    </Box>
  );
};

export default Home;