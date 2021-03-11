import React from 'react'
import './Messages.css'
import {Avatar} from '@material-ui/core'
function Messages() {
    return (
        <div className="messages">
            <Avatar/>
            <div className="messages__info">
                <h4>
                    Devashar
                    <span className="message__timestamp">Timestamp</span>
                </h4>
                <p>This is a message</p>
            </div>
        </div>
    )
}

export default Messages
