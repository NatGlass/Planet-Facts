import { useState } from 'react'
import StyledTabContainer from '../../../styles/shared/styled.tab-container'
import EarthTabLink from '../../../styles/shared/tab-links/styled.earth-tab-links'

export default function EarthTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const toggleActiveTab = (index) => {
        setActiveTab(index);
    }

    return (
        <StyledTabContainer>
            <EarthTabLink className={activeTab === 1 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(1)}>OVERVIEW</EarthTabLink>
            <EarthTabLink className={activeTab === 2 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(2)}>STRUCTURE</EarthTabLink>
            <EarthTabLink className={activeTab === 3 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(3)}>SURFACE</EarthTabLink>
        </StyledTabContainer>
    )
}
