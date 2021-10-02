import Item from "./component/item";
import "./App.css"

const Title = () => <h1>แอพบัญชี รายรับ-รายจ่าย</h1>
// const Description = () => <p>บันทึกข้อมูลในแต่ละวัน</p>
const Transation = () => {
  return (
    <ul className="item-list">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
    
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
