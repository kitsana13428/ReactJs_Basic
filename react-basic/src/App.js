import Item from "./component/item";
import "./App.css"

const Title = () => <h1>แอพบัญชี รายรับ-รายจ่าย</h1>
// const Description = () => <p>บันทึกข้อมูลในแต่ละวัน</p>
const Transation = () => {
  const data = [
    {title:"ค่าอาหาร", amount:"2000"},
    {title:"ค่ารถ", amount:"3000"},
    {title:"ค่าน้ำมัน", amount:"1500"}
  ]
  return (
    <ul className="item-list">
        <Item title={data[0].title} amount={data[0].amount}/>
        <Item title={data[1].title} amount={data[1].amount}/>
        <Item title={data[2].title} amount={data[2].amount}/>
          {/* <li>ค่าอาหาร <span> -1500</span></li>
          <li>เงินเดือน <span> +10000</span></li> */}
      </ul> 
  );
}


function App() { 
  return (
    <div className="container"> 
        <Title />
        <Transation />    
    </div>
  );
}

export default App;
