import Item from "./item";
// import DataContext from "../data/DataContext";


const Transaction = (props) => {
    const {items} = props
    
    return (
      <div>
        <ul className="item-list">
         {items.map((element) => {
          //  return <Item title = {element.title} amount = {element.amount}/> //array.map ลูปอาเรย์มาแสดง
           return <Item {...element} key = {element.id} /> //ดึงมาใช้แบบสั้น และใช้ uid
         })
       }
        </ul> 

      </div>
    );
  }

  export default Transaction;
  