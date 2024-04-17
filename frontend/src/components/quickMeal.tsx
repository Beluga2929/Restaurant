export const QuickMeal = () => {
    const foodDetail: { name: string; price: number }[] = [
      {
        name: "ข้าวผัดแหนม",
        price: 50,
      },
      {
        name: "ข้าวกะเพรา",
        price: 60,
      },
    ];
    return (
      <div  >
        {foodDetail.map((item, index) => (
          <div className="meal-item" key={index} style={{backgroundColor:'pink',padding:'20px',margin:'10px',width:'20%',height:'100px'}}>
            <span>{item.name}</span>
            <span>ราคา {item.price} บาท</span>
          </div>
        ))}
      </div>
    );
  };