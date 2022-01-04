import React from 'react'
import Tabs from '../components/shared/tabs/uranus-tabs'
import ContentContainer from '../styles/shared/styled.content-container'
import StyledTitle from '../styles/shared/styled.title'
import StyledFactContainer from '../styles/shared/styled.fact-container'
import StyledFact from '../styles/shared/styled.fact'

export default function Uranus() {
    return (
      <>
        <Tabs />
        <ContentContainer>
            <StyledTitle>URANUS</StyledTitle>
        </ContentContainer>
        <StyledFactContainer>
            <StyledFact>17.2 HOURS</StyledFact>
            <StyledFact>84 YEARS</StyledFact>
            <StyledFact>25,362 KM</StyledFact>
            <StyledFact>-195°C</StyledFact>
        </StyledFactContainer>
        </>
    )
}
