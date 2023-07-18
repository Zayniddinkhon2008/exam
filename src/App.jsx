import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import BlankGoods from "./Pages/BlankGoods/BlankGoods";
import Goods from "./Pages/Goods/Goods";
import NewGoods from "./Pages/NewGoods/NewGoods";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header className="header" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blankGoods" element={<BlankGoods />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/newGoods" element={<NewGoods />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;

