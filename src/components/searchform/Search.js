import React from 'react'
import {Form,Row,Col} from "react-bootstrap"
import PropTypes from "prop-types"
export const Search = ({handleOnChange,str}) => {
    console.log(str)
    return (
        <div>
            <Form>
                <Form.Group as={Row} >
                    <Form.Label column sm={1}>Search</Form.Label>
                    <Col sm="11">
                    <Form.Control name="searchStr"
                    onChange={handleOnChange}
                    placeholder="search"/>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

Search.ProtoTypes ={
    handleOnChange: PropTypes.func.isRequired,
}