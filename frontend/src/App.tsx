import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Food } from "./pages/Food";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/food" element={<Food/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
