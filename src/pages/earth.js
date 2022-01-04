import React from 'react'
import Tabs from '../components/shared/tabs/earth-tabs'
import ContentContainer from '../styles/shared/styled.content-container'
import StyledTitle from '../styles/shared/styled.title'
import StyledFactContainer from '../styles/shared/styled.fact-container'
import StyledFact from '../styles/shared/styled.fact'

export default function Earth() {
    return (
      <>
        <Tabs />
        <ContentContainer>
          <StyledTitle>EARTH</StyledTitle>
        </ContentContainer>
          <StyledFactContainer>
            <StyledFact>0.99 DAYS</StyledFact>
            <StyledFact>365.26 DAYS</StyledFact>
            <StyledFact>6,371 KM</StyledFact>
            <StyledFact>16°C</StyledFact>
        </StyledFactContainer>
        </>
    )
}
