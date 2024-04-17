import { Navbarlogin } from "../components/Navbarlogin";
import { useState } from "react";
import "../pages/Login.css";
import { Footer } from "../components/Footer";
export const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username !== "" && password !== "") {
      window.location.href = "/";
    }
  };
  return (
    <div className="container-login">
      <div className="navbar">
        <Navbarlogin />
      </div>
      <div className="content-left"></div>
      <div className="content-right">
        <div className="form-register">
          <div className="header">สมัครสมาชิก</div>
          <form onSubmit={handleRegister}>
            <div className="input-form">
              <span>ชื่อผู้ใช้</span>
              <br />
              <input
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                pattern="[a-zA-Z]{5,20}" 
                type="text"
              />
            </div>
            <div className="input-form">
              <span>รหัสผ่าน</span>
              <br />
              <input
                id="password"
                name="password"
                pattern="[a-zA-Z0-9]{8,10}"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
              />
            </div>
            <div className="input-form">
              <span>เบอร์มือถือ</span>
              <br />
              <input
                id="phone"
                name="phone"
                value={phone}
                pattern="[0-9]{10}" 
                required
                onChange={(e) => setPhone(e.target.value)}
                type="number"
              />
            </div>
            <div className="btn-verify ">
              <button type="submit">verify</button>
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
