// import Item from "./component/item";
import Transaction from "./component/Transaction";
import FormComponent from "./component/FormComponent"; //ดึงเข้ามาใช้งาน
import "./App.css"
import { useState } from "react";



const Title = () => <h1>แอพบัญชี รายรับ-รายจ่าย</h1>
// const Description = () => <p>บันทึกข้อมูลในแต่ละวัน</p>

function App() { //เรียกใช้คอมโพแนน

  const initData = [
    {id:1,title:"ค่ารถ", amount:3000},
    {id:2,title:"ค่าอาหาร", amount:2000},
    {id:3,title:"ค่าน้ำมัน", amount:1500},
    {id:4,title:"ค่ายา", amount:1000} 
  ]
    const [items,setItems] = useState(initData)
    const onAddNewItem = (newItem)=> {
      setItems((prevItem) => {
        return [newItem,...prevItem] //ใหม่สุดอยู่ข้างบน
      })
    }
  return (
    <div className="container"> 
        <Title /> 
        <FormComponent onAddItem = {onAddNewItem}/>
        <Transaction items = {items}/>  
          
    </div>
  );
}

export default App;
