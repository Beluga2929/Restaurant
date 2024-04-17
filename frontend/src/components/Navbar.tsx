import "../components/Navbar.css";
import logo from "../images/logo.png"
export const Navbar = () => {
  
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} width={120} />
          </div>
        <ul>
          <li>
            <a href="/food">สั่งอาหาร </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <a href="/checklist">ตรวจสอบรายการอาหาร</a>
          </li>
          <li>
            <a href="/status">สถานะรายการอาหาร</a>
          </li>
          <li>
            <a href="/">logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
