import { Card, Button } from "react-bootstrap"
import React from "react"
import { useShoppingCart } from "./ShoppingCartContext.tsx"


type PrintsItemsProps = {
    id: number
    name: string
    price: number
    img: string
}

export function PrintsItems({ id, name, price, img }: PrintsItemsProps) {
    const { 
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart, 
    } = useShoppingCart()
    const quantify = getItemQuantity(id)

    return <Card className="h-100">

        <Card.Img
        variant="top" 
        src={img} 
        height="300px"
        style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="tituloitems1">{name}</span>
                <span className="ms-2 text-muted">${price}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantify === 0 ? (
                    <Button variant="outline-primary" className="w-100" onClick = {() => increaseCartQuantity(id)}>
                        + Add to cart
                    </Button>
                ): <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                    <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}>
                        <Button variant="outline-primary" onClick = {() => decreaseCartQuantity(id)}>-</Button>
                        <span className="itemsincart">{quantify}</span> in cart
                        <Button variant="outline-primary" onClick = {() => increaseCartQuantity(id)}>+</Button>
                    </div>
                    <Button onClick = {() => removeFromCart(id)} variant="outline-danger" size="sm">Remove</Button>
                    </div>}
            </div>    

        </Card.Body>

    </Card>
 } 