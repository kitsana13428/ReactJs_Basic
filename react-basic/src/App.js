const Title = () => <h1>รายรับ รายจ่าย</h1>
const Description = () => <p>บันทึกข้อมูลในแต่ละวัน</p>
const Item = () => <li>ค่าเดินทาง <span> -500</span></li>
const Transation = () => {
  return (
    <ul>
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
    <div> 
      <center>
        <Title />
        <Description />
        <Transation />
      </center>
    </div>
  );
}

export default App;
