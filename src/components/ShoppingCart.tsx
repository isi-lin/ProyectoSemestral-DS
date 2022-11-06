import { Offcanvas, OffcanvasBody, Stack } from "react-bootstrap";
import { OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";
import React, { useEffect, useState } from "react"
import { useShoppingCart } from "./ShoppingCartContext.tsx";
import { CartItem } from "./CartPrints.tsx";
import { CartItem2 } from "./CartArtsupplies.tsx";
import { CartItem3 } from "./CartBooks.tsx";

import artsuppliesItems from "../itemsartsupplies.json"
import booksItems from "../itemsbooks.json"
import printsItems from "../itemsprints.json"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps){
    const [storeItems, setItems] = useState([]);
    useEffect(()=> {
        fetch('https://ptsyppiurfzybmv.form.io/itemsprints/submission')
        .then(response => response.json())
        .then(data => {
            setItems(data);
        })
    }, [])


    const [storeItems2, setItems2] = useState([]);
    useEffect(()=> {
        fetch('https://ptsyppiurfzybmv.form.io/itemsartsupplies/submission')
        .then(response => response.json())
        .then(data => {
            setItems2(data);
        })
    }, [])


    const [storeItems3, setItems3] = useState([]);
    useEffect(()=> {
        fetch('https://ptsyppiurfzybmv.form.io/itemsbooks/submission')
        .then(response => response.json())
        .then(data => {
            setItems3(data);
        })
    }, [])


    const {closeCart, cartItems} = useShoppingCart()
    return <Offcanvas show = {isOpen} onHide = {closeCart} placement = "end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title className="tituloitems">Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <OffcanvasBody>
             <Stack gap = {3}>
                {cartItems.map(item => (
                <CartItem2 key = {item.id} {...item} />))}
                

            </Stack>
            <Stack gap = {3}>
                {cartItems.map(item => (
                <CartItem3 key = {item.id} {...item} />))}
                

            </Stack>
            <Stack gap = {3}>
                {cartItems.map(item => (
                <CartItem key = {item.id} {...item} />))}

                <div className="ms-auto fw-bold fs-5">
                    Total ${cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find(i => i.data.id === cartItem.id)
                        const item2 = storeItems2.find(i => i.data.id === cartItem.id)
                        const item3 = storeItems3.find(i => i.data.id === cartItem.id)
                        return total + (item?.data.price || 0) * cartItem.quantity + (item2?.data.price || 0) * cartItem.quantity + (item3?.data.price || 0) * cartItem.quantity
                    }, 0)
                    }
                </div>

            </Stack>
        </OffcanvasBody>
    </Offcanvas>
}