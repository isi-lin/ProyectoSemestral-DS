import { Offcanvas, OffcanvasBody, Stack } from "react-bootstrap";
import { OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";
import React from 'react'
import { useShoppingCart } from "./ShoppingCartContext.tsx";
import { CartItem } from "./CartPrints.tsx";
import printsItems from "../itemsprints.json"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps){
    const {closeCart, cartItems} = useShoppingCart()
    return <Offcanvas show = {isOpen} onHide = {closeCart} placement = "end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <OffcanvasBody>
            <Stack gap = {3}>
                {cartItems.map(item => (
                <CartItem key = {item.id} {...item} />))}
                <div className="ms-auto fw-bold fs-5">
                    Total {cartItems.reduce((total, cartItem) => {
                        const item = printsItems.find(i => i.data.id === cartItem.id)
                        return total + (item?.data.price || 0) * cartItem.quantity
                    }, 0)
                    }
                </div>

            </Stack>
        </OffcanvasBody>
    </Offcanvas>
}