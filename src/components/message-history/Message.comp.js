import React from 'react'
import PropTypes from "prop-types"
import "./message.style.css"
export const Message = ({msg}) => {
    if(!msg) return null
    return msg.map((row,i)=> <div className="message__history mt-3">
    <div key={i} className="send font-weight-bold text-secondary">
        <div className="sender">{row.messageBy}</div>
        <div className="date">{row.date}</div>
    </div>
    <div className="message">{row.message}</div>
    
</div>)
     
    
}

Message.ProtoTypes ={
    msg:PropTypes.array.isRequired,
}