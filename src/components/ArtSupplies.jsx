import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { ArtSuppliesItem } from "./ArtSuppliesItem.tsx"
import Card from 'react-bootstrap/Card';

export default function ArtSupplies(){
    const [storeItems, setItems] = useState([]);
    useEffect(()=> {
        fetch('https://ptsyppiurfzybmv.form.io/itemsartsupplies/submission')
        .then(response => response.json())
        .then(data => {
            setItems(data);
        })
    }, [])
    return (
        <>
        <Card className="text-center">
      <Card.Body>
        <h2>Art Supplies!</h2>
        <a>Create your own art with Heikala's art supplies</a><br></br>
      </Card.Body>
    </Card>
    <br></br>
    <br></br>
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(artsuppliesItems => (
                <Col key={artsuppliesItems.id}>
                <ArtSuppliesItem {...artsuppliesItems["data"]}/>
                </Col>
            ))}
        </Row>
        </>
    ) 

}