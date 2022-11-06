import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { PrintsItems } from "./PrintsItems.tsx"
import Card from 'react-bootstrap/Card';

export default function Prints(){
    const [storeItems, setItems] = useState([]);
    useEffect(()=> {
        fetch('https://ptsyppiurfzybmv.form.io/itemsprints/submission')
        .then(response => response.json())
        .then(data => {
            setItems(data);
        })
    }, [])
    return (
        <>
        <Card className="text-center">
      <Card.Body>
        <h2>Prints!</h2>
        <a>Many prints designed and made by Heikala</a><br></br>
      </Card.Body>
    </Card>
    <br></br>
    <br></br>
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(itemsprints => (
                <Col key={itemsprints.id}>
                <PrintsItems {...itemsprints["data"]}/>
                </Col>
            ))}
        </Row>
        </>
    ) 

}