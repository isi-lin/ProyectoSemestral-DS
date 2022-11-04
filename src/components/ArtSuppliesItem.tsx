import { Card } from "react-bootstrap"
import React from "react"

type AsuppliesItemsProps = {
    id: number
    name: string
    price: number
    img: string
}

export function ArtSuppliesItem({ id, name, price, img }: AsuppliesItemsProps) {
    return <Card className="h-100">

        <Card.Img
        variant="top" 
        src={img} 
        height="200px"
        style={{ objectFit: "cover" }}
        />

        <Card.Body className="d-flex flex column">
            <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{price}</span>

            </Card.Title>
            <div className="mt-auto"></div>

        </Card.Body>

    </Card>
 }  