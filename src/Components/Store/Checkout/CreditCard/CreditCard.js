import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { CardBackCVCContainer, CardBackNameContainer, CardBackThank, FlipCard, FlipCardBack, FlipCardFront, FlipCardInner, OuterContainer } from './CardStyle/Style'
import CreditCardFront from './CreditCardFront'
export default function CreditCard({ focus }) {


    return (
        <OuterContainer maxWidth="xs" className="creditCard_outerContainer" >
     
                <div  className="creditCard_flipCard" >
          
                    <FlipCardInner focusCVC={focus}className="creditCard_flipCard_inner" >
                        <FlipCardFront maxWidth="xs">
                            <CreditCardFront />
                        </FlipCardFront>

                        <FlipCardBack elevation={8} >
                            <CardBackNameContainer>
                                <p>asdasd</p>
                                <p>123</p>
                            </CardBackNameContainer>
                            <CardBackCVCContainer>
                                <p>123</p>
                            </CardBackCVCContainer>
                            <CardBackThank>
                                <p>Thank you for using our service ! </p>
                            </CardBackThank>

                        </FlipCardBack>
                    </FlipCardInner>
                  
                </div>
            
        </OuterContainer>
    )
}
