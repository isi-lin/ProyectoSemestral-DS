import React from "react"
import { Col, Row } from "react-bootstrap"
import printsItems from "../itemsprints.json"
import { PrintsItems } from "./PrintsItems.tsx"


export default function Prints(){
    return (
        <>
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