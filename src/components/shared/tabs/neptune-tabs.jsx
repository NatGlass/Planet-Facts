import { useState } from 'react'
import StyledTabContainer from '../../../styles/shared/styled.tab-container'
import NeptuneTabLink from '../../../styles/shared/tab-links/styled.neptune-tab-links'

export default function NeptuneTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const toggleActiveTab = (index) => {
        setActiveTab(index);
    }

    return (
        <StyledTabContainer>
            <NeptuneTabLink className={activeTab === 1 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(1)}>OVERVIEW</NeptuneTabLink>
            <NeptuneTabLink className={activeTab === 2 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(2)}>STRUCTURE</NeptuneTabLink>
            <NeptuneTabLink className={activeTab === 3 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(3)}>SURFACE</NeptuneTabLink>
        </StyledTabContainer>
    )
}
