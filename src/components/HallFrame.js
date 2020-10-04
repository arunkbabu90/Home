import React from 'react'

function HallFrame(props) {
    return (
        <li>
            <div class="port_in">
                <a href={props.to} target="_blank">
                    <img src={props.src} className="po1" />
                </a>
            </div>
        </li>
    )
}

export default HallFrame