import { Card, Button } from "react-bootstrap"
import React from "react"

type AsuppliesItemsProps = {
    id: number
    name: string
    price: number
    img: string
}

export function ArtSuppliesItem({ id, name, price, img }: AsuppliesItemsProps) {
    const quantify = 0
    return <Card className="h-100">

        <Card.Img
        variant="top" 
        src={img} 
        height="200px"
        style={{ objectFit: "cover" }}
        />

        <Card.Body style={{alignContent: 'cover'}}>
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{price}</span>

            </Card.Title>
            <div className="mt-auto">
                {quantify === 0 ? (
                    <Button className="w-100">
                        + Add to cart
                    </Button>
                ): null}
            </div>   

        </Card.Body>

    </Card>
 }  