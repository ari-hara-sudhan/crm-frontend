import React from 'react'
import {Breadcrumb} from "react-bootstrap"
export const Breadcrumbpage = ({page}) => {
    return (
        <div>
            <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>{page}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
    )
}