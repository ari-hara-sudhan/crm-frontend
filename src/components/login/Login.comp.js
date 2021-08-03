import React from 'react'
import {Container,Row,Col,Form,Button} from "react-bootstrap"
import  PropTypes from "prop-types"
export const Login = ({handleOnChange,email,password,handleSubmit,formSwitcher}) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-info text-center">Client Login </h1>
                    <hr/>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control type="email"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder="Enter email"
                            required
                             />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                            name="password"
                            value={password}
                            onChange={handleOnChange}
                            placeholder="Enter password"
                            requri
                             />
                        </Form.Group>
                        <Button  className="entry-btn"type="submit">Login</Button>
                    </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <a href="#" onClick={()=>formSwitcher('reset')}>Forget Password</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

Login.ProtoTypes ={
    handleOnChange:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired,
    formSwitcher:PropTypes.func.isRequired,

}