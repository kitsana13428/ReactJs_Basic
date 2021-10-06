import PropTypes from 'prop-types'; // อิมพอต ป็อปไทร์มาใช้

const Item = (props) => {
    return (
    <li > {props.title} <span> {props.amount} </span></li>
    );
}
Item.propTypes = {
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
export default Item