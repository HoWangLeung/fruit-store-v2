import React from 'react'
import { FormattedMessage } from 'react-intl'
import './Logo.scss'
export default function Logo() {
    return (
        <div className="store_logo">
            <div className="inner">
                <h2><FormattedMessage id='app.title'/></h2>
            </div>
        </div>
    )
}
