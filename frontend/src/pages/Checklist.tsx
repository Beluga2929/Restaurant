import { Navbar } from "../components/Navbar";
import "../pages/Checklist.css";
interface TableData {
  item: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

const data: TableData[] = [
  { item: "ข้าวผัด", quantity: 2, price: 90, totalPrice: 180 },
  { item: "ข้าวคะน้าหมูกรอบ", quantity: 1, price: 50, totalPrice: 50 },
  { item: "ข้าวคะน้าหมูกรอบ", quantity: 1, price: 50, totalPrice: 50 },
];

const TotalRow: React.FC = () => {
  const total = data.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <tr style={{ borderTop: " 1px solid #ddd", paddingTop: "50px" }}>
      <td colSpan={2} style={{ paddingTop: "50px" }}></td>
      <td style={{ paddingTop: "50px" }}>ราคารวมทั้งหมด </td>
      <td style={{ paddingTop: "50px" }}> {total} บาท</td>
    </tr>
  );
};

const Table: React.FC = () => {

  return (
    <table>
      <thead>
        <tr>
          <th>ลำดับรายการ</th>
          <th>รายละเอียด</th>
          <th>จำนวน</th>
          <th>ราคา</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.item}</td>
            <td>{item.quantity}</td>
            <td>{item.price} บาท</td>
          </tr>
        ))}
        <TotalRow />
      </tbody>
    </table>
  );
};

export const Checklist = () => {
  const handelBookOrder =()=>{
    window.location.href='/status'
  }
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="table-container">
        <h2>ตรวจสอบรายการอาหาร</h2>
        <Table />
        <div className="btn-cancel-book">
          <button className="btn-cancel">ยกเลิกอาหาร</button>
          <button  onClick={handelBookOrder} className="btn-book">จองอาหาร</button>
        </div>
      </div>
    </div>
  );
};
