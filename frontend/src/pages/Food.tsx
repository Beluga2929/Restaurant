import { Navbar } from "../components/Navbar";
import { QuickMeal } from "../components/quickMeal";
import { useState } from "react";
import "../pages/Food.css";
export const Food = () => {
  const [meal,setMeal] = useState(false)
  const menuClick =()=>{
    setMeal(true)
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="menu">
        <div className="typeMenu">
          <ul>
            <li>
              <a href="">เมนุกับข้าว</a>
            </li>
            <li>
              <a  onClick={menuClick}>เมนูจานเดียว</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        { meal && < QuickMeal/>}
      </div>
      
    </div>
  );
};
