import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import { Breadcrumbpage } from '../../components/breadcrumb/Breadcrumb'
import { Search } from '../../components/searchform/Search'
import { Ticket } from '../../components/ticket-table/Ticket.comp'
import tickets from "../../data/dummy.json"
export const Ticketlist = () => {
    const [str,setStr]=useState('')
    const [displaytic,setDisplaytic]=useState(tickets)
    

    useEffect(() => {
    },[str,displaytic])
    const handleOnChange=e=>{
        const {value} = e.target;
        setStr(value)
        searchStr(value)




    }
    const searchStr=(str)=>{
        const displayTickets=tickets.filter(row=>row.subject.toLowerCase().includes(str.toLowerCase()))

        setDisplaytic(displayTickets)

    }
    return (
        <div>
            <Container className="mt-4">
                <Row>
                    <Col>
                    <Breadcrumbpage page="Ticket Lists"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button variant="info" > Add New Ticket</Button>
                    </Col>
                    <Col className="text-right"><Search handleOnChange={handleOnChange} str={str}/></Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                    <Ticket tickets={displaytic}/>
                    
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
