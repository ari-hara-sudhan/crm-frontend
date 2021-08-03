import React,{useEffect, useState} from 'react'
import { Breadcrumbpage } from '../../../components/breadcrumb/Breadcrumb'
import { Container,Row,Col } from 'react-bootstrap'
import { AddTicketForm } from '../../../components/add-ticket-form/AddTicketForm.comp'
import { shortText } from '../../../utlits/validation'
export const AddTicket = () => {

    const intialFrmdt={
        subject:'',
        issuedate:'',
        detail:''

    }
    const intialErrdt={
        subject:false,
        issuedate:false,
        detail:false

    }
    const [frmdata,setFrmdata]=useState(intialFrmdt)
    const [frmdataErr,setFrmdataErr]=useState(intialFrmdt)

    useEffect(()=>{},[frmdata,frmdataErr])

    const handleOnChange=e=>{
        const {name,value}=e.target;
        setFrmdata({
            ...frmdata,
            [name]:value
        })
    }

    const handleSubmit= async (e)=>{
        e.preventDefault()

        const isValid = await shortText(frmdata.subject)

        isValid && setFrmdataErr({
            ...intialErrdt,
            subject:!isValid,

        })
        console.log(frmdata)
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <Breadcrumbpage page="tickets"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <AddTicketForm handleOnChange={handleOnChange}
                    handleSubmit={handleSubmit}
                     frmdata={frmdata}
                     frmdataErr={frmdataErr}/>
                    </Col>
                </Row>
            </Container>
           
        </div>
    )
}
