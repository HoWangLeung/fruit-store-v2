import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp as whatsapp } from "@fortawesome/free-brands-svg-icons"
import './Whatsapp.scss'
function WhatsappIcon() {
    return (
        <a target="_blank" href="https://wa.me/85292591883">
            <div className="whatsappIcon" >

                <FontAwesomeIcon icon={whatsapp} />

            </div>
        </a>
    )
}

export default WhatsappIcon
