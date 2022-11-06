import { useShoppingCart } from "./ShoppingCartContext.tsx"
import booksItems from "../itemsbooks.json"
import { Stack } from "react-bootstrap"
import React from 'react'
import { Button } from "react-bootstrap"


type CartItemProps = {
    id: number
    quantity: number

}

export function CartItem3 ({id, quantity}: CartItemProps) {
    const { removeFromCart} = useShoppingCart()
    const item = booksItems.find( i => i.data.id === id)
    if (item == null) return null

    return (
        <Stack direction = "horizontal" gap ={2} className= "d-flex align-items-center">
            <img src={item.data.img} style ={{width: "125px", height: "75px", objectFit: "cover"}}/>
            <div className= "me-auto">
                <div>
                    {item.data.name} {quantity > 1 && <span className= "text-muted" style={{fontSize: ".65rem"}}>x{quantity}</span>}
                </div>
                <div className ="text-muted" style={{fontSize :".75rem"}}>{item.data.price}
                </div>
            </div>
            <div>{item.data.price * quantity}</div>
            <Button variant ="outline-danger" size="sm" onClick={()=> removeFromCart(item.data.id)}>&times;</Button>

        </Stack>
    )


}