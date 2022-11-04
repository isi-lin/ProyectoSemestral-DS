import React from "react"
import { Col, Row } from "react-bootstrap"
import printsItems from "../itemsprints.json"
import { PrintsItems } from "./PrintsItems.tsx"
import Card from 'react-bootstrap/Card';


export default function Prints(){
    return (
        <>
        <Card className="text-center">
      <Card.Body>
        <h2>Prints!</h2>
        <a>Many prints designed and made by Heikala</a><br></br>
      </Card.Body>
    </Card>
    <h2>prints</h2>
        <Row md={2} xs={1} lg={3} className="g-3">
            {printsItems.map(itemsprints => (
                <Col key={itemsprints.id}>
                <PrintsItems {...itemsprints["data"]}/>
                </Col>
            ))}
        </Row>
        </>
    ) 

}