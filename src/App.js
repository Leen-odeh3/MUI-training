import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Create from "./Pages/Create/Create.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Component/Header.jsx";
import { useState } from "react";

function App() {
  const [mode, setmode] = useState(
    localStorage.getItem("mode") === null
      ? "light"
      : localStorage.getItem("mode") === "light"
      ? "light"
      : "dark"
  );

  const darkTheme = createTheme({
    palette: {
      mode: `${mode}`
      ,
      color: {
        main: mode === 'light' ? "#e0e0e0" : "gray",
       
    }
}});

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Header change={setmode} />

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
