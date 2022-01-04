import React from 'react'
import Tabs from '../components/shared/tabs/venus-tabs'
import ContentContainer from '../styles/shared/styled.content-container'
import StyledTitle from '../styles/shared/styled.title'
import StyledFactContainer from '../styles/shared/styled.fact-container'
import StyledFact from '../styles/shared/styled.fact'

export default function Venus() {
    return (
      <>
        <Tabs />
        <ContentContainer>
          <StyledTitle>VENUS</StyledTitle>
        </ContentContainer>
          <StyledFactContainer>
            <StyledFact>243 DAYS</StyledFact>
            <StyledFact>224.7 DAYS</StyledFact>
            <StyledFact>6,051.8 KM</StyledFact>
            <StyledFact>471°C</StyledFact>
        </StyledFactContainer>
        </>
    )
}
