import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Button} from "react-bootstrap"
import tickets from "../../data/dummy.json"
import { Breadcrumbpage } from '../../components/breadcrumb/Breadcrumb'
import { Message } from '../../components/message-history/Message.comp'
import { Update } from '../../components/update-ticket/Update'

const ticket=tickets[0]
export const Ticket= () => {

const[message,setMessage]=useState('')
console.log(message)

useEffect(() =>[message])
const handleOnChange=e=>{
    setMessage(e.target.value)
}
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("done")
}
    
    return (
        <div>
            <Container>
              <Row>
                  <Col>
                  <Breadcrumbpage page="Ticket"/>
                  </Col>
              </Row>
              <Row>
                  <Col className="text-weight-bolder text-secondary" >
                  <div className="subject">Subject: {ticket.subject}</div>
                  <div className="date">Issuedate: {ticket.addedAt}</div>
                  <div className="status">Status: {ticket.status}</div>
                  </Col>

                  <Col className="text-right">
                  <Button variant="outline-info">Close ticket</Button>
                  </Col>
              </Row>
              <Row>
                  <Col className="mt-4">
                  <Message msg={ticket.history} />
                  </Col>
              </Row>
              <Row>
                  <Col className="mt-4">
                      <Update msg={message} handleOnChange={handleOnChange} 
                      handleSubmit={handleSubmit} />
                  </Col>
              </Row>

            </Container>
        </div>
    )
}
