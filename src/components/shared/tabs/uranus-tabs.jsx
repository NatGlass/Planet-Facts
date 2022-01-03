import { useState } from 'react'
import StyledTabContainer from '../../../styles/shared/styled.tab-container'
import UranusTabLink from '../../../styles/shared/tab-links/styled.uranus-tab-links'

export default function UranusTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const toggleActiveTab = (index) => {
        setActiveTab(index);
    }

    return (
        <StyledTabContainer>
            <UranusTabLink className={activeTab === 1 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(1)}>OVERVIEW</UranusTabLink>
            <UranusTabLink className={activeTab === 2 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(2)}>STRUCTURE</UranusTabLink>
            <UranusTabLink className={activeTab === 3 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(3)}>SURFACE</UranusTabLink>
        </StyledTabContainer>
    )
}
