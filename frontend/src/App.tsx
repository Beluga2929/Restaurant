import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Food } from "./pages/Food";
import { Login } from "./pages/Login";
import { Checklist } from "./pages/Checklist";
import { Status } from "./pages/Status";
import { Register } from "./pages/Register";
import '../src/App.css'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/food" element={<Food/>}/>
          <Route path="/checklist" element={<Checklist/>}/>
          <Route path="/status" element={< Status />}/>
          <Route path="/register" element={< Register />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
