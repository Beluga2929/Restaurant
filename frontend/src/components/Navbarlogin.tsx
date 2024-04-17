import "../components/Navbar.css";
import logo from "../images/logo.png"
export const Navbarlogin = () => {
  
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
     
    </div>
  );
};
