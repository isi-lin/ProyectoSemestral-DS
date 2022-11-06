import { useShoppingCart } from "./ShoppingCartContext.tsx"
import { Stack } from "react-bootstrap"
import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"


type CartItemProps = {
    id: number
    quantity: number

}

export function CartItem({id, quantity}: CartItemProps) {
    const [storeItems, setItems] = useState([]);
    useEffect(()=> {
        fetch('https://ptsyppiurfzybmv.form.io/itemsprints/submission')
        .then(response => response.json())
        .then(data => {
            setItems(data);
        })
    }, [])
    const { removeFromCart} = useShoppingCart()
    const item = storeItems.find( i => i.data.id === id)
    if (item == null) return null

    return (
        <Stack direction = "horizontal" gap ={2} className= "d-flex align-items-center">
            <img src={item.data.img} style ={{width: "125px", height: "75px", objectFit: "cover"}}/>
            <div className= "me-auto">
                <div className="tituloitems">
                    {item.data.name} {quantity > 1 && <span className= "text-muted" style={{fontSize: ".65rem"}}>x{quantity}</span>}
                </div>
                <div className ="text-muted" style={{fontSize :".75rem"}}>${item.data.price}
                </div>
            </div>
            <div>${item.data.price * quantity}</div>
            <Button variant ="outline-danger" size="sm" onClick={()=> removeFromCart(item.data.id)}>&times;</Button>

        </Stack>
    )


}