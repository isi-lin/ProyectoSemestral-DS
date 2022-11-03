import React from "react"
import { Col, Row } from "react-bootstrap"
import printsItems from "../item.json"
import { PrintsItems } from "./PrintsItems.tsx"


export default function Prints(){
    return (
        <>
        <h3>Prints</h3>
        <Row md={2} xs={1} lg={3} className="g-3">
            {printsItems.map(item => (
                <Col key={item.id}>
                <PrintsItems {...item["data"]}/>
                </Col>
            ))}
        </Row>
        </>
    ) 

}