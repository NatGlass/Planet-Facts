import { useState } from 'react'
import StyledTabContainer from '../../../styles/shared/styled.tab-container'
import NeptuneTabLink from '../../../styles/shared/tab-links/styled.neptune-tab-links'
import StyledParagraph from '../../../styles/shared/styled.paragraph';
import Image from '../../../styles/shared/tab-images/neptune-image'
// images //
import OverviewImage from '../../../assets/planet-neptune.svg'
import InternalImage from '../../../assets/planet-neptune-internal.svg'
export default function NeptuneTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const toggleActiveTab = (index) => {
        setActiveTab(index);
    }

    return (
        <>
        <StyledTabContainer>
            <NeptuneTabLink className={activeTab === 1 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(1)}>OVERVIEW</NeptuneTabLink>
            <NeptuneTabLink className={activeTab === 2 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(2)}>STRUCTURE</NeptuneTabLink>
            <NeptuneTabLink className={activeTab === 3 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(3)}>SURFACE</NeptuneTabLink>
        </StyledTabContainer>

        <StyledParagraph className={activeTab === 1 ? "active-tab-content" : ""}>
            Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.
        </StyledParagraph>
        
        <StyledParagraph className={activeTab === 2 ? "active-tab-content" : ""}>
            Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.
        </StyledParagraph>

        <StyledParagraph className={activeTab === 3 ? "active-tab-content" : ""}>
            Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.
        </StyledParagraph>
            
        <Image src={OverviewImage} className={activeTab === 1 ? "active-tab-image" : ""} />
        
        <Image src={InternalImage} className={activeTab === 2 ? "active-tab-image" : ""} />
        
        <Image src={OverviewImage} className={activeTab === 3 ? "active-tab-image" : ""} />            
        </>
    )
}
