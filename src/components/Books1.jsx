import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { BooksItems } from "./BooksItems.tsx"
import Card from 'react-bootstrap/Card';

export default function Books1(){
    const [storeItems, setItems] = useState([]);
    useEffect(()=> {
        fetch('https://ptsyppiurfzybmv.form.io/itemsbooks/submission')
        .then(response => response.json())
        .then(data => {
            setItems(data);
        })
    }, [])

    return (
        <>
        <Card className="text-center">
      <Card.Body>
        <h2>Books!</h2>
        <a>Heikala's art now available in books</a><br></br>
      </Card.Body>
    </Card>
    <br></br>
    <br></br>
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(itemsbooks => (
                <Col key={itemsbooks.id}>
                <BooksItems {...itemsbooks["data"]}/>
                </Col>
            ))}
        </Row>
        </>
    ) 

}