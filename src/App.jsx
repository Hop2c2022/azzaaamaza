import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header1 } from "./components/header1";
import { Nevtreh } from "./pages/Nevtreh";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nevtreh" element={<Nevtreh />}></Route>
        <Route path="/howwework" element={<Header1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
