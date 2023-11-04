import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home.jsx'
import Create from './Pages/Create/Create.jsx'
import Header from "./Component/Header.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
