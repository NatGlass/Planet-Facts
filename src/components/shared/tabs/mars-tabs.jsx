import { useState } from 'react'
import StyledTabContainer from '../../../styles/shared/styled.tab-container'
import MarsTabLink from '../../../styles/shared/tab-links/styled.mars-tab-links'

export default function MarsTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const toggleActiveTab = (index) => {
        setActiveTab(index);
    }

    return (
        <StyledTabContainer>
            <MarsTabLink className={activeTab === 1 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(1)}>OVERVIEW</MarsTabLink>
            <MarsTabLink className={activeTab === 2 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(2)}>STRUCTURE</MarsTabLink>
            <MarsTabLink className={activeTab === 3 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(3)}>SURFACE</MarsTabLink>
        </StyledTabContainer>
    )
}
