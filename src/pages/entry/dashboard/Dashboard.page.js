import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import {  Breadcrumbpage } from '../../../components/breadcrumb/Breadcrumb'
import { Ticket } from '../../../components/ticket-table/Ticket.comp'
import tickets from "../../../data/dummy.json"
export const Dashboard = () => {
    return (
       
        <Container>
           
             <Row>
                <Col>
                <Breadcrumbpage page="Dashboard"/>
                </Col>
            </Row> 
            <Row>
                <Col className="text-center mt-5 mb-2">
                <Button variant="info" style={{"font-size":"2rem",padding:"10px 30px",color:"white"}}>Add New Ticket</Button>
                
                </Col>
            </Row>
            <Row>
                <Col className="text-center  mb-2">
                <div>
                    Total tickets :50
                </div>
                <div>
                    pending tickets :50
                </div>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mb-3">
                    Recently Added Tickets
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="mt-2">
                   <Ticket tickets={tickets}/> 
                </Col>
            </Row>
        </Container>
    )
}
