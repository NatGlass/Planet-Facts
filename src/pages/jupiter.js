import React from 'react'
import Tabs from '../components/shared/tabs/jupiter-tabs'
import ContentContainer from '../styles/shared/styled.content-container'
import StyledTitle from '../styles/shared/styled.title'
import StyledFactContainer from '../styles/shared/styled.fact-container'
import StyledFact from '../styles/shared/styled.fact'

export default function Jupiter() {
    return (
      <>
        <Tabs />
        <ContentContainer>
          <StyledTitle>JUPITER</StyledTitle>
        </ContentContainer>
        <StyledFactContainer>
            <StyledFact>9.93 HOURS</StyledFact>
            <StyledFact>11.86 YEARS</StyledFact>
            <StyledFact>69,911 KM</StyledFact>
            <StyledFact>-108°C</StyledFact>
        </StyledFactContainer>
        </>
    )
}
