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
       {data.map((element) => {
         return <Item title = {element.title} amount = {element.amount}/> //array.map ลูปอาเรย์มาแสดง
       })
       }
  
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
