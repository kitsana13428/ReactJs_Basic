import './item.css'

const Item = () => {
    const name = "ค่าเดินทาง"
    const amount = 500
    return (
    <li className="Item"> {name} <span> -{amount} </span></li>
    );
}

export default Item