import { useState,useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid'; //อิมพอตยูไอดีมาใช้ สร้างไอดีอัตโนมัติ

const FormComponent = (props) => {

    const [title,setTitle] = useState('') //สร้าง ยูสสเตจ title
    const [amount,setAmount] = useState('') //สร้าง amount
    const [formValid,setFormValid] = useState(false) //สร้าง formvalid ค่าเริ่มต้นเป็นเท็จ


    const inputTitle = (event) => {
        setTitle(event.target.value) //เรียกใช้งาน ยูสสเตจ
    }

    const inputAmount = (event) => {
        setAmount(event.target.value)
    }

    const saveItem = (event) => {
        event.preventDefault(); //ไม่ให้จอรีเฟช ไม่ให้เคลียค่า
        const itemData = { 
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData);
        setTitle('') //คืนค่าให้เป็นค่าว่าง
        setAmount('') //ให้ค่าเป็นค่าเริ่มต้น
    }

    useEffect(() => { //ตรวจค่าว่าง ถ้าค่าว่างไม่สามารถเพิ่มข้อมูลได้
        const checkData = title.trim().length>0 && amount.trim().length>0 //สร้างตัวแปร เก็บ title และ amount ที่ไม่ให้เป็นค่าว่าง
        setFormValid(checkData)
    },[title,amount])

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder= "ระบุชื่อรายการ" onChange={inputTitle} value={title}/> {/* value ดึงค่าจาก setTitle ให้เป็นค่าเริ่มต้น */}
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="text" placeholder= "ระบุจำนวนเงิน" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>+เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent;