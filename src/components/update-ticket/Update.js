import React from 'react'
import PropTypes from 'prop-types'
import {Form ,Button} from "react-bootstrap"
export const Update = ({msg,handleOnChange,handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Reply</Form.Label>
            <div>
            <Form.Text>Please reply ur message</Form.Text>
            </div>
            
            <Form.Control
            name='details'
            value={msg}
            onChange={handleOnChange}
            as="textarea"
            row="5"
            />
            <div className="text-right mt-3" >
            <Button type="submit" variant="info">Reply</Button>
            </div>
            
            
        </Form>
    )
}

Update.ProtoTypes ={
    msg:PropTypes.string.isRequired,
    handleOnChange:PropTypes.func.isRequired,
}