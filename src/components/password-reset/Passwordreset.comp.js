import React from 'react'
import {Container,Row,Col,Form,Button} from "react-bootstrap"
import  PropTypes from "prop-types"
export const ResetPassword = ({handleOnResetSubmit,email,formSwitcher}) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-info text-center">Client Login </h1>
                    <hr/>
                    <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                        <Form.Group>
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control type="email"
                            name="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={handleOnResetSubmit} />
                        </Form.Group>
                        <Button type="submit">ResetPassword</Button>
                    </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <a href="#" onClick={()=>formSwitcher('login')}>Login Now</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

ResetPassword.ProtoTypes ={
    handleOnResetSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,

    

}