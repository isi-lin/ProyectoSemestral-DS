import { Card, Button } from "react-bootstrap"
import React from "react"

type BooksItemsProps = {
    id: number
    name: string
    price: number
    img: string
}

export function BooksItems({ id, name, price, img }: BooksItemsProps) {
    const quantify = 0
    return <Card className="h-100">

        <Card.Img
        variant="top" 
        src={img} 
        height="300px"
        style={{ objectFit: "cover" }}
        />

        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex
            justify-content-between
            align-items-baseline
            mb-4">
                <span className="tituloitems">{name}</span>
                <span className="ms-2 text-muted">${price}</span>

            </Card.Title>
            <div className="mt-auto">
                {quantify === 0 ? (
                    <Button variant="outline-primary" className="w-100">
                        + Add to cart
                    </Button>
                ): <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                    <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}>
                        <Button variant="outline-primary">-</Button>
                        <span className="fs-3">{quantify}</span> in cart
                        <Button variant="outline-primary">+</Button>
                    </div>
                    <Button variant="outline-danger" size="sm">Remove</Button>
                    </div>}
            </div>

        </Card.Body>

    </Card>
 }  