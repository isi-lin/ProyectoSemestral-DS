import React from "react"
import { Col, Row } from "react-bootstrap"
import artsuppliesItems from "../itemsartsupplies.json"
import { ArtSuppliesItem } from "./ArtSuppliesItem.tsx"
import Card from 'react-bootstrap/Card';


export default function ArtSupplies(){
    return (
        <>
        <Card className="text-center">
      <Card.Body>
        <h2>Art Supplies!</h2>
        <a>Create your own art with Heikala's art supplies</a><br></br>
      </Card.Body>
    </Card>
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