import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nevtreh } from "./pages/Nevtreh";
import { Home } from "./pages/Home";
import { Burtguuleh } from "./pages/Burtguuleh";
import { ForgotPass } from "./pages/nuutsUgSergeeh";
import { AuthProvider } from "./themeContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Nevtreh />}></Route>
          <Route path="/ForgotPass" element={<ForgotPass />}></Route>
          <Route path="/SignUp" element={<Burtguuleh />}></Route>
          <Route path="/burtguuleh" element={<Burtguuleh />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
