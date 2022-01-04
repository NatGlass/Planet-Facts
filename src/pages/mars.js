import React from 'react'
import Tabs from '../components/shared/tabs/mars-tabs'
import ContentContainer from '../styles/shared/styled.content-container'
import StyledTitle from '../styles/shared/styled.title'
import StyledFactContainer from '../styles/shared/styled.fact-container'
import StyledFact from '../styles/shared/styled.fact'

export default function Mars() {
    return (
      <>
        <Tabs />
        <ContentContainer>
          <StyledTitle>MARS</StyledTitle>
        </ContentContainer>
        <StyledFactContainer>
            <StyledFact>1.03 DAYS</StyledFact>
            <StyledFact>1.88 YEARS</StyledFact>
            <StyledFact>3,389.5 KM</StyledFact>
            <StyledFact>-28°C</StyledFact>
        </StyledFactContainer>
        </>
    )
}
