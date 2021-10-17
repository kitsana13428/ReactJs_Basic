// import Item from "./component/item";
import Transaction from "./component/Transaction";
import FormComponent from "./component/FormComponent"; //ดึงเข้ามาใช้งาน
import "./App.css"
import { useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./component/ReportComponent";

function App() { //เรียกใช้คอมโพแนน

  const initData = [
      
  ]
    const [items,setItems] = useState(initData)
    const onAddNewItem = (newItem)=> {
      setItems((prevItem) => {
        return [newItem,...prevItem] //ใหม่สุดอยู่ข้างบน
      })
    }
  return (
  <DataContext.Provider value={"คอปเตอร์"}>
     <div className="container"> 
        <h1>แอพบัญชี รายรับ-รายจ่าย</h1>
        <ReportComponent />
        <FormComponent onAddItem = {onAddNewItem}/>
        <Transaction items = {items}/>  
    </div>  
  </DataContext.Provider>
  );
}

export default App;
