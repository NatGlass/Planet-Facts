import React from 'react'
import Tabs from '../components/shared/tabs/mercury-tabs'
import ContentContainer from '../styles/shared/styled.content-container'
import StyledTitle from '../styles/shared/styled.title'
import StyledFactContainer from '../styles/shared/styled.fact-container'
import StyledFact from '../styles/shared/styled.fact'

export default function Mercury() {
    return (
      <>
        <Tabs />
        <ContentContainer>
          <StyledTitle>MERCURY</StyledTitle>
        </ContentContainer>
        <StyledFactContainer>
          <StyledFact>58.6 DAYS</StyledFact>
          <StyledFact>87.97 DAYS</StyledFact>
          <StyledFact>2,439.7 KM</StyledFact>
          <StyledFact>430°C</StyledFact>
        </StyledFactContainer>
        </>
    )
}
