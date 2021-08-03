import React from 'react'
import {Form,Button,Row,Col} from "react-bootstrap"
import PropTypes from "prop-types"
export const AddTicketForm = ({handleSubmit,handleOnChange,frmdata,frmdataErr}) => {




    return (
        <div style={{
            maxWidth:"650px",
            margin:"auto",
            background:"white",
            boxShadow:"0px 2px 22px -2px rgba(0,0,0,0.32)",
            padding:"30px",
            marginTop:"10px",

        }}>
            <h3 className="text-center text-info">Add New Ticket</h3>
            <hr/>
            <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row}>
                            <Form.Label column  sm={3}>Subject</Form.Label>
                            <Col>
                            <Form.Control 
                            name="subject"
                            minLength="3"
                            value={frmdata.subject}
                            onChange={handleOnChange}
                            placeholder="Enter subject"
                            required
                             />
                             <Form.Text className="text-danger">{frmdataErr.subject && "subject is requried" }</Form.Text>
                            </Col>
                           
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>issueFound</Form.Label>
                            <Col>
                            <Form.Control type="date"
                            name="issuedate"
                            value={frmdata.issuedate}
                            onChange={handleOnChange}
                            placeholder="Enter password"
                            required
                             />
                            </Col>
                        
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>Details</Form.Label>
                            <Col>
                            <Form.Control as="textarea"
                            name="detail"
                            value={frmdata.detail}
                            row="5"
                            onChange={handleOnChange}
                            placeholder="Enter Details"
                            required
                             />
                            </Col>
                          
                        </Form.Group>
                        <Button variant="info" style={{width:"100%"}}  className="mt-3"type="submit">Login</Button>
                    </Form>
        </div>
    )
}
AddTicketForm.ProtoTypes={
    handleOnChange:PropTypes.func.isRequired,
    handleSubmit:PropTypes.func.isRequired,
    frmdata:PropTypes.object.isRequired,
    frmdataErr:PropTypes.object.isRequired,


 }