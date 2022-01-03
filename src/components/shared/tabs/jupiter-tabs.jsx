import { useState } from 'react'
import StyledTabContainer from '../../../styles/shared/styled.tab-container'
import JupiterTabLink from '../../../styles/shared/tab-links/styled.jupiter-tab-links'

export default function JupiterTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const toggleActiveTab = (index) => {
        setActiveTab(index);
    }

    return (
        <StyledTabContainer>
            <JupiterTabLink className={activeTab === 1 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(1)}>OVERVIEW</JupiterTabLink>
            <JupiterTabLink className={activeTab === 2 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(2)}>STRUCTURE</JupiterTabLink>
            <JupiterTabLink className={activeTab === 3 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(3)}>SURFACE</JupiterTabLink>
        </StyledTabContainer>
    )
}
