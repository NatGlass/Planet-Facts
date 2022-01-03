import { useState } from 'react'
import StyledTabContainer from '../../../styles/shared/styled.tab-container'
import SaturnTabLink from '../../../styles/shared/tab-links/styled.saturn-tab-links'

export default function SaturnTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const toggleActiveTab = (index) => {
        setActiveTab(index);
    }

    return (
        <StyledTabContainer>
            <SaturnTabLink className={activeTab === 1 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(1)}>OVERVIEW</SaturnTabLink>
            <SaturnTabLink className={activeTab === 2 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(2)}>STRUCTURE</SaturnTabLink>
            <SaturnTabLink className={activeTab === 3 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(3)}>SURFACE</SaturnTabLink>
        </StyledTabContainer>
    )
}
