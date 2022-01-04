import React from 'react'
import Tabs from '../components/shared/tabs/saturn-tabs'
import ContentContainer from '../styles/shared/styled.content-container'
import StyledTitle from '../styles/shared/styled.title'
import StyledFactContainer from '../styles/shared/styled.fact-container'
import StyledFact from '../styles/shared/styled.fact'

export default function Saturn() {
    return (
      <>
        <Tabs />
        <ContentContainer>
          <StyledTitle>SATURN</StyledTitle>
        </ContentContainer>
        <StyledFactContainer>
            <StyledFact>10.8 HOURS</StyledFact>
            <StyledFact>29.46 YEARS</StyledFact>
            <StyledFact>58,232 KM</StyledFact>
            <StyledFact>-138°C</StyledFact>
        </StyledFactContainer>
        </>
    )
}
