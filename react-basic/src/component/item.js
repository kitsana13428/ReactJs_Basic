import PropTypes from 'prop-types'; // อิมพอต ป็อปไทร์มาใช้
import "./item.css"; //ดึง css มาใช้
// import DataContext from '../data/DataContext';
// import { useContext } from 'react';

const Item = (props) => {
    const {title,amount} = props
    const status = amount<0 ? "expense" : "income" //เงื่อนไขน้อย 0 รายจ่าย ไม่ใช่ รายรับ
    const symbol = amount<0 ? "-" : "+" //สัญลักษณ์ด้านหน้า
    // const name = useContext(DataContext) //เอา use context เก็บค่าไว้ในตัวแปร name
    return (
        //Math.abs - และ - คือ บวก 
    <li className={status}>  {title} <span> {symbol}{Math.abs(amount)} </span></li> 
    
    );
}
Item.propTypes = {
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
export default Item