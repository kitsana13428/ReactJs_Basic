import Item from "./item";
import DataContext from "../data/DataContext";
import { useContext } from "react"; //ใช้ use context

const Transaction = (props) => {
    const {items} = props
    const name = useContext(DataContext) //เอา use context เก็บค่าไว้ในตัวแปร name
    return (
      <div>
        <ul className="item-list">
         {items.map((element) => {
          //  return <Item title = {element.title} amount = {element.amount}/> //array.map ลูปอาเรย์มาแสดง
           return <Item {...element} key = {element.id} /> //ดึงมาใช้แบบสั้น และใช้ uid
         })
       }
        </ul> 
        {name}
      </div>
    );
  }

  export default Transaction;
  