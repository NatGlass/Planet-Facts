import React from 'react'
import Tabs from '../components/shared/tabs/neptune-tabs'
import ContentContainer from '../styles/shared/styled.content-container'
import StyledTitle from '../styles/shared/styled.title'
import StyledFactContainer from '../styles/shared/styled.fact-container'
import StyledFact from '../styles/shared/styled.fact'

export default function Neptune() {
    return (
      <>
        <Tabs />
        <ContentContainer>
          <StyledTitle>NEPTUNE</StyledTitle>
        </ContentContainer>
        <StyledFactContainer>
            <StyledFact>16.08 HOURS</StyledFact>
            <StyledFact>164.79 YEARS</StyledFact>
            <StyledFact>24,622 KM</StyledFact>
            <StyledFact>-201°C</StyledFact>
        </StyledFactContainer>
        </>
    )
}
