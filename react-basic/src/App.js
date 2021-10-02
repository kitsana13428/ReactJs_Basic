import Item from "./component/item";

const Title = () => <h1>รายรับ รายจ่าย</h1>
const Description = () => <p>บันทึกข้อมูลในแต่ละวัน</p>
const Transation = () => {
  return (
    <ul>
        <Item />
        <Item />
    
          {/* <li>ค่าอาหาร <span> -1500</span></li>
          <li>เงินเดือน <span> +10000</span></li> */}
      </ul> 
  );
}


function App() {
  return (
    <div> 
        <Title />
        <Description />
        <Transation />  
    </div>
  );
}

export default App;
