
const Item = (props) => {
    const name = "ค่าเดินทาง"
    const amount = 500
    return (
    <li > {props.title} <span> {props.amount} </span></li>
    );
}

export default Item