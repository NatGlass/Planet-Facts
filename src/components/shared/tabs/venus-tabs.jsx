import { useState } from 'react'
import StyledTabContainer from '../../../styles/shared/styled.tab-container'
import VenusTabLink from '../../../styles/shared/tab-links/styled.venus-tab-links'

export default function VenusTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const toggleActiveTab = (index) => {
        setActiveTab(index);
    }

    return (
        <StyledTabContainer>
            <VenusTabLink className={activeTab === 1 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(1)}>OVERVIEW</VenusTabLink>
            <VenusTabLink className={activeTab === 2 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(2)}>STRUCTURE</VenusTabLink>
            <VenusTabLink className={activeTab === 3 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(3)}>SURFACE</VenusTabLink>
        </StyledTabContainer>
    )
}
