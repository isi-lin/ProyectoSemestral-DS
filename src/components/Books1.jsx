import React from "react"
import { Col, Row } from "react-bootstrap"
import booksItems from "../itemsbooks.json"
import { BooksItems } from "./BooksItems.tsx"
import Card from 'react-bootstrap/Card';


export default function Books1(){
    return (
        <>
        <Card className="text-center">
      <Card.Body>
        <h2>Books!</h2>
        <a>Heikala's art now available in books</a><br></br>
      </Card.Body>
    </Card>
        <h3>Books</h3>
        <Row md={2} xs={1} lg={3} className="g-3">
            {booksItems.map(itemsbooks => (
                <Col key={itemsbooks.id}>
                <BooksItems {...itemsbooks["data"]}/>
                </Col>
            ))}
        </Row>
        </>
    ) 

}