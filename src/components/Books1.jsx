import React from "react"
import { Col, Row } from "react-bootstrap"
import booksItems from "../itemsbooks.json"
import { BooksItems } from "./BooksItems.tsx"


export default function Books1(){
    return (
        <>
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