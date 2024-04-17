import '../components/Navbar.css'
export const Navbar = () => {
    return (
      <div  className="navbar"  style={{boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',backgroundColor:'#e32929' }}>
        <p>ร้านอาหารกริว </p>
        {/* <ul>
            <li>
                <a href="/food">สั่งอาหาร </a>
            </li>
        </ul> */}
      </div>
    );
  };