import { useState } from 'react'
import StyledTabContainer from '../../../styles/shared/styled.tab-container'
import MarsTabLink from '../../../styles/shared/tab-links/styled.mars-tab-links'
import StyledParagraph from '../../../styles/shared/styled.paragraph';
import Image from '../../../styles/shared/tab-images/mars-image'
// images //
import OverviewImage from '../../../assets/planet-mars.svg'
import InternalImage from '../../../assets/planet-mars-internal.svg'
export default function MarsTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const toggleActiveTab = (index) => {
        setActiveTab(index);
    }

    return (
        <>
        <StyledTabContainer>
            <MarsTabLink className={activeTab === 1 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(1)}>OVERVIEW</MarsTabLink>
            <MarsTabLink className={activeTab === 2 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(2)}>STRUCTURE</MarsTabLink>
            <MarsTabLink className={activeTab === 3 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(3)}>SURFACE</MarsTabLink>
        </StyledTabContainer>

        <StyledParagraph className={activeTab === 1 ? "active-tab-content" : ""}>
            Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".
        </StyledParagraph>
        
        <StyledParagraph className={activeTab === 2 ? "active-tab-content" : ""}>
            Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.
        </StyledParagraph>

        <StyledParagraph className={activeTab === 3 ? "active-tab-content" : ""}>
            Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.
        </StyledParagraph>
            
        <Image src={OverviewImage} className={activeTab === 1 ? "active-tab-image" : ""} />
        
        <Image src={InternalImage} className={activeTab === 2 ? "active-tab-image" : ""} />
        
        <Image src={OverviewImage} className={activeTab === 3 ? "active-tab-image" : ""} />            
        </>
    )
}
