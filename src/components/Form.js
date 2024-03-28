import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { useData } from "../context/DataContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Form = () => {
  const { cartData, setCartData } = useData();
  const [formData, setFormData] = useState({})

  const navigate = useNavigate()



  const handleCity = (e) =>{
    setFormData({...formData, ...{city:e.target.value}})
  }

  const handleAddress = (e) =>{
    setFormData({...formData, ...{address:e.target.value}})
  }

  const handleName = (e) =>{
    setFormData({...formData, ...{name:e.target.value}})
  }

  const handlePhone = (e) =>{
    setFormData({...formData, ...{phone:e.target.value}})
  }

  const handleEmail = (e) =>{
    setFormData({...formData, ...{email:e.target.value}})
  }


const handleSubmit = async (e) => {
  e.preventDefault()
  const baseURL = process.env.REACT_APP_BASE_URL;
  const body = {
    product: cartData,
    quantity: 1,
    info: formData
  }
   if (body.info.name || body.info.address ) {
    let response = await axios.post(`${baseURL}/orders`,body)

   if ( response){
    setCartData([])
    localStorage.setItem('cartData', JSON.stringify([]))
    setFormData({})
    navigate('/profile')
   }
   }
}


  return (
    <form id="form_area" onSubmit={handleSubmit}>
      <Input name={"City"} isHalf={true} showLabel={true} handleInput={handleCity}/>
      <Input name={"Address"} isHalf={false} showLabel={true} handleInput={handleAddress}/>
      <Input name={"Name"} isHalf={false} showLabel={true} handleInput={handleName}/>
      <Input name={"Phone"} isHalf={false} showLabel={true} handleInput={handlePhone}/>
      <Input name={"Email"} isHalf={false} showLabel={true} handleInput={handleEmail}/>

      <h1> Payment Method</h1>

      <div id="order_Btn">
        <Button name={"Payment Card"} isFilled={false} />
        <Button name={"Cash on Delivery"} isFilled={false} />
        <p> I agree...</p>
        <Button name={"Place an Order"} isFilled={true} />
      </div>
    </form>
  );
};


export default Form