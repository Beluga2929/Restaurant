import React, { useState } from 'react';
import { Navbarlogin } from "../components/Navbarlogin";
import "../pages/Login.css";
import { Footer } from "../components/Footer";

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    if (username !== '' && password !== '') {
      window.location.href = '/food';
    }
  };

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
          <form onSubmit={handleLogin}>
            <div className="input-form">
              <span>ชื่อผู้ใช้</span>
              <br />
              <input 
                id="username" 
                name="username" 
                pattern="[a-zA-Z]{5,15}" 
                required 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
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
                type="text" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <div className="btn-login">
              <button type="submit">เข้าสู่ระบบ</button>
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
