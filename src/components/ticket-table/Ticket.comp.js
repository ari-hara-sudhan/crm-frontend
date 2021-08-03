import React from 'react'
import {Table} from "react-bootstrap"
export const Ticket= ({tickets}) => {
    console.log(tickets)
    return (
        <Table
        striped
        bordered
        hover
        >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subjects</th>
                    <th>Status</th>
                    <th>Opend Dates</th>
                </tr>
            </thead>
            <tbody>


                { tickets?.length ? (
                    tickets.map(row=>
                        <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.subject}</td>
                        <td>{row.status}</td>
                        <td>{row.addedAt}</td>
                    </tr>

                ) 
                    ):(
                        <tr>
                            <td colspan="4" className="text-center">No tickect show</td>
                        </tr>
                    )
                
                }
              
                
            </tbody>
        </Table>
    )
}
