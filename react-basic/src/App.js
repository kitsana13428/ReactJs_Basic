// import Item from "./component/item";
import Transaction from "./component/Transaction";
import FormComponent from "./component/FormComponent"; //ดึงเข้ามาใช้งาน
import "./App.css"
import { useState, useEffect , useReducer } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./component/ReportComponent";

function App() { //เรียกใช้คอมโพแนน

    // const initState = [
    //   {id:1,title: "ค่าเช่า", amount: -2000},
    //   {id:1,title: "ค่าอาหาร", amount: -1500},
    //   {id:1,title: "ค่าเดินทาง", amount: -3000},
    //   {id:1,title: "เงินเดือน", amount: 25000}
    // ]
    const [items,setItems] = useState([]) //[] = อาเรย์เปล่าๆ

    const [reportIncome, setReportIncome] = useState(0) //สร้างตัวแปร รีพอตรายรับ และ จ่าย
    const [reportExpense, setReportExpense] = useState(0)

    const onAddNewItem = (newItem)=> {
      setItems((prevItem) => {
        return [newItem,...prevItem] //ใหม่สุดอยู่ข้างบน
      })
    }

    useEffect(() => { //เรียกใช้งาน useEffect
      const amounts = items.map(items => items.amount) //ลูปข้อมูลอาเรย์แล้วเก็บในตัวแปร amount
      const income = amounts.filter(element => element > 0).reduce((total,element) => total+=element,0)//กรองค่าที่มากกว่า 0 เก็บในตัวแปร และ reduce คือการรวมค่าอาเรย์  
      const expense = (amounts.filter(element => element < 0).reduce((total,element) => total+=element,0))*-1 //*-1 เพื่อ ค่าลบ ให้เป้น บวก
      setReportIncome(income)
      setReportExpense(expense)
    },[items,reportIncome,reportExpense])

    //reducer state ใช้งาน
    const [showReport , setShowReport] = useState(true)
    const reducer = (state,action) => {
          switch(action.type){
            case "SHOW" :
              return setShowReport(true)
            case "HIDE" :
              return setShowReport(false)
          }
    }

    const [result, dispatch] = useReducer(reducer,showReport)
    return (
      <DataContext.Provider value={
        {
          income : reportIncome,
          expense : reportExpense
        }
      }>
         <div className="container"> 
            <h1>แอพบัญชี รายรับ-รายจ่าย</h1>
            {showReport && <ReportComponent />}
            <h1>{result}</h1>
            <button className="SH" onClick={() => dispatch({type:"SHOW"})}>แสดง</button> 
            <button className="HI" onClick={() => dispatch({type:"HIDE"})}>ซ่อน</button> 
            <FormComponent onAddItem = {onAddNewItem}/>
            <Transaction items = {items}/>   
        </div>  
      </DataContext.Provider>
    )
}

export default App;
