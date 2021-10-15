import PropTypes from 'prop-types'; // อิมพอต ป็อปไทร์มาใช้
import "./item.css"; //ดึง css มาใช้

const Item = (props) => {
    const {title,amount} = props
    const status = amount<0 ? "expense" : "income" //เงื่อนไขน้อย 0 รายจ่าย ไม่ใช่ รายรับ
    const symbol = amount<0 ? "-" : "+" //สัญลักษณ์ด้านหน้า
    return (
    <li className={status}>  {title} <span> {symbol}{Math.abs(amount)} </span></li> //Math.abs - และ - คือ บวก 
    );
}
Item.propTypes = {
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
export default Item