import { useState } from 'react'
import StyledTabContainer from '../../../styles/shared/styled.tab-container'
import MercuryTabLink from '../../../styles/shared/tab-links/styled.mercury-tab-links'

export default function MercuryTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const toggleActiveTab = (index) => {
        setActiveTab(index);
    }

    return (
        <StyledTabContainer>
            <MercuryTabLink className={activeTab === 1 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(1)}>OVERVIEW</MercuryTabLink>
            <MercuryTabLink className={activeTab === 2 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(2)}>STRUCTURE</MercuryTabLink>
            <MercuryTabLink className={activeTab === 3 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(3)}>SURFACE</MercuryTabLink>
        </StyledTabContainer>
    )
}
