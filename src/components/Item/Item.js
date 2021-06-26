import React, {useState} from 'react'
import './Item.css'
function Item({prod}) {
console.log(prod)
   
    
const [amount, setAmount] = useState(0);
const [stockAmount, setStockAmount] = useState(20);

   
 const increaseButton=()=>{
     if(stockAmount == 0){
         console.log("lo siento, no queda más stock")
     }else{
 
 setStockAmount(stockAmount-1)
 setAmount( amount+1);
     }
     
    }
 const decreaseButton=()=>{
     if(amount >= 1){
        setAmount( amount-1);
        setStockAmount(stockAmount+1)
     }else{
         console.log("ya está en 0");
     }
   
}

    return (
        <div className="container__itemCount">
            <h3>{prod.title}</h3><span class={stockAmount==0?'colorred':'colorblack'}>Stock: {stockAmount}</span>
            <h2>${prod.price}</h2>
            <img src={prod.picyureUrl} width="250px"/>
            <div className="container__itemCount__counter">
            
             <button onClick={increaseButton}>+</button>
             <input type="text" id="fname" name="fname" value={amount}  disabled></input>
             <button onClick={decreaseButton}>-</button>
            <button class="addButtonCart">Agregar al carrito</button>
            <p>{prod.description}</p>
            </div>
        </div>
    )
}

export default Item
