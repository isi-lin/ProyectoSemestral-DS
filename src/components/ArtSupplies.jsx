import React from "react"
import { Col, Row } from "react-bootstrap"
import artsuppliesItems from "../itemsartsupplies.json"
import { ArtSuppliesItem } from "./ArtSuppliesItem.tsx"


export default function ArtSupplies(){
    return (
        <>
        <h3>Art Supplies</h3>
        <Row md={2} xs={1} lg={3} className="g-3">
            {artsuppliesItems.map(artsuppliesItems => (
                <Col key={artsuppliesItems.id}>
                <ArtSuppliesItem {...artsuppliesItems["data"]}/>
                </Col>
            ))}
        </Row>
        </>
    ) 

}