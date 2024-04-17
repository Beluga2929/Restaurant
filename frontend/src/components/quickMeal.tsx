
import "../components/QuickMeal.css";
import images from "../images/image";
import addIcon from "../assets/add.svg";

type FoodItem = {
  name: string;
  price: number;
  image: string;
};


export const QuickMeal = () => {
  const foodDetail: FoodItem[] = [
    {
      name: "ข้าวคะน้าหมูกรอบ",
      price: 50,
      image: images["ข้าวคะน้าหมูกรอบ"],
    },
    {
      name: "ข้าวกะเพรา",
      price: 50,
      image: images["ข้าวกะเพรา"],
    },
  ];

  

  return (
    <div className="meal-item">
      {foodDetail.map((item, index) => (
        <div className="meal-detail" key={index}>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "130px", height: "120px", borderRadius: "5px" }}
          />
          <span>{item.name}</span>
          <span>ราคา {item.price} บาท</span>
          <img
            className="add"
            src={addIcon}
            alt="Add"
            style={{ width: "25px", height: "25px", marginLeft: "auto" }}
           
          />
        </div>
      ))}
    </div>
  );
};
