import { Navbar } from "../components/Navbar";
import { QuickMeal } from "../components/QuickMeal";
import { useState } from "react";
import { Meal } from "../components/Meal";
import { FC } from "react";
import ModalList from "../components/ModalList";
import ModalRandom from "../components/ModalRandom";
import "../pages/Food.css";
import images from "../images/image";
import { useEffect } from "react";

export const Food: FC = () => {
  //ตั้ง default สุ่ม
  useEffect(() => {
    handleRandomFood();
  }, [])

  const [meal, setMeal] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [foodList, setFoodList] = useState<FoodItem[]>([
    { name: "ข้าวคะน้าหมูกรอบ", price: 50, quantity: 1 },
    { name: "ข้าวกะเพรา", price: 50, quantity: 1 },
  ]);

  const handleQuickMeal = () => {
    setMeal(true);
  };

  const handleMeal = () => {
    setMeal(false);
  };

  interface FoodItem {
    name: string;
    price: number;
    quantity: number;
    image?: string;
  }

  const [randomFood, setRandomFood] = useState<FoodItem | null>(null);

  const foodRandom: FoodItem[] = [
    {
      name: "ข้าวคะน้าหมูกรอบ",
      price: 50,
      image: images["ข้าวคะน้าหมูกรอบ"],
      quantity: 1,
    },
    {
      name: "ข้าวกะเพรา",
      price: 50,
      image: images["ข้าวกะเพรา"],
      quantity: 1,
    },
    {
      name: "แกงป่า",
      price: 50,
      image: images["แกงป่า"],
      quantity: 1,
    },
    {
      name: "ต้มข่าไก่",
      price: 50,
      image: images["ต้มข่าไก่"],
      quantity: 1,
    },
  ];

  const handleRandomFood = () => {
    const randomIndex = Math.floor(Math.random() * foodRandom.length);
    const randomFood = foodRandom[randomIndex];
    setRandomFood(randomFood);
  };

  const handleAddToCart = () => {
    if (randomFood) {
      setFoodList([...foodList, randomFood]);
    }
  };

  const handleInQuantity = (index: number) => {
    const updatedFoodList = [...foodList];
    updatedFoodList[index].quantity += 1;
    setFoodList(updatedFoodList);
  };

  const handleDeQuantity = (index: number) => {
    const updatedFoodList = [...foodList];
    if (updatedFoodList[index].quantity > 1) {
      updatedFoodList[index].quantity -= 1;
    } else {
      updatedFoodList.splice(index, 1); // เอารายการออก 
    }
    setFoodList(updatedFoodList);
  };

  const getTotalPrice = () => {
    return foodList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleChecklist = () => {
    window.location.href = "/checklist";
  };

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="navbarMenu">
        <div className="typeMenu">
          <ul>
            <li>
              <a className="menu-type-name" onClick={handleQuickMeal}>
                เมนูจานเดียว
              </a>
            </li>
            <li>
              <a className="menu-type-name" onClick={handleMeal}>
                เมนูกับข้าว
              </a>
            </li>
          </ul>
        </div>
        <div className="searchBar">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10385/10385257.png"
            width="20"
            height="20"
          />
          <input type="search" placeholder="ค้นหาเมนู" />
        </div>
        <div className="random-food">
          <button className="btn-random" onClick={() => setIsModalOpen(true)}>
            สุ่มอาหาร
          </button>
          <ModalRandom
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            {randomFood && (
              <div className="card-random">
                <img
                  src={randomFood.image}
                  height={250} width={250}
                  alt={randomFood.name}
                />
                <br />
                <span>{randomFood.name}</span> <br />
                <span>ราคา {randomFood.price} บาท</span>
              </div>
            )}
            <div className="btn-random-group">
              <button className="btn-new-random" onClick={handleRandomFood}>
                สุ่มใหม่
              </button>
              <button className="btn-add-list" onClick={handleAddToCart}>
                เพิ่มเข้าในรายการ
              </button>
            </div>
          </ModalRandom>
        </div>
        <div className="order-food">
          <button className="btn-order" onClick={() => setIsModalOpen2(true)}>
            รายการอาหาร
          </button>
          <ModalList
            isOpen={isModalOpen2}
            onClose={() => setIsModalOpen2(false)}
          >
            <div className="popup-order">
              <span style={{ marginTop: "20px" }}>รายการอาหาร</span> <br />
              <ul className="orderList">
                {foodList.map((item, index) => (
                  <li key={index}>
                    {item.name} ราคา {item.price} บาท จำนวน {item.quantity}{" "}
                    &nbsp;
                    <button
                      className="increment-button"
                      onClick={() => handleInQuantity(index)}
                    >
                      +
                    </button>
                    <button
                      className="decrement-button"
                      onClick={() => handleDeQuantity(index)}
                    >
                      -
                    </button>
                  </li>
                ))}
              </ul>
              <div> ราคารวม: {getTotalPrice()} บาท</div>
              <button onClick={handleChecklist} className="btn-checklist">
                ตรวจสอบรายการอาหาร
              </button>
            </div>
          </ModalList>
        </div>
      </div>
      <div className="showMenu">{meal ? <QuickMeal /> : <Meal />}</div>
      <div></div>
    </div>
  );
};
