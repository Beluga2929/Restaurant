import {Navbarlogin} from "../components/Navbarlogin"
import "../pages/Login.css";
import { Footer } from "../components/Footer";
export const Login = () => {
  const handleToFood =()=>{
    window.location.href='/food'
  }
  return (
    <div className="container-login">
      <div className="navbar">
        <Navbarlogin />
      </div>
      <div className="content-left">
      
      </div>
      <div className="content-right">
       
        <div className="form-login">
          <div className="header">กรุณาเข้าสู่ระบบ</div>
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
            <div className="btn-login ">
              <button onClick={handleToFood} type="submit">เข้าสู่ระบบ</button>
            </div>
            <div className="register-link">
              <span>
                ยังไม่มีสมาชิก? <a href="/register">สมัครเลย</a>
              </span>
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
