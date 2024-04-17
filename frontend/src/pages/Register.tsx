import {Navbarlogin} from "../components/Navbarlogin"
import "../pages/Login.css";
import { Footer } from "../components/Footer";
export const Register = () => {

    const handleToLogin =()=>{
        window.location.href="/food"
    }
  return (
    <div className="container-login">
      <div className="navbar">
        <Navbarlogin />
      </div>
      <div className="content-left">
      
      </div>
      <div className="content-right">
        <div className="form-register">
          <div className="header">สมัครสมาชิก</div>
          <form action="">
            <div className="input-form">
              <span>ชื่อผู้ใช้</span>
              <br />
              <input  type="text" />
            </div>
            <div className="input-form">
              <span>รหัสผ่าน</span>
              <br />
              <input type="password" />
            </div>
            <div className="input-form">
              <span>เบอร์มือถือ</span>
              <br />
              <input type="number" />
            </div>
            <div className="btn-verify ">
              <button onClick={handleToLogin} type="submit">verify</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
