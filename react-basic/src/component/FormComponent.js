import { useState } from 'react'
import './FormComponent.css'

const FormComponent = () => {

    const [title,setTitle] = useState('') //สร้าง ยูสสเตจ 
    const [amount,setAmount] = useState(0)

    const inputTitle = (event) => {
        setTitle(event.target.value) //เรียกใช้งาน ยูสสเตจ
    }

    const inputAmount = (event) => {
        setAmount(event.target.value)
    }

    const saveItem = (event) => {
        event.preventDefault(); //ไม่ให้จอรีเฟช ไม่ให้เคลียค่า
        const itemData = {
            title:title,
            amount:Number(amount)
        }
        console.log(itemData);
        setTitle('') //คืนค่าให้เป็นค่าว่าง
        setAmount(0) //ให้ค่าเป็นค่าเริ่มต้น
    }
    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder= "ระบุชื่อรายการ" onChange={inputTitle} value={title}/> {/* value ดึงค่าจาก setTitle ให้เป็นค่าเริ่มต้น */}
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder= "ระบุจำนวนเงิน" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className="btn">+เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent