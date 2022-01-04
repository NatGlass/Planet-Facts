import { useState } from 'react'
import StyledTabContainer from '../../../styles/shared/styled.tab-container'
import JupiterTabLink from '../../../styles/shared/tab-links/styled.jupiter-tab-links'
import StyledParagraph from '../../../styles/shared/styled.paragraph';
import Image from '../../../styles/shared/tab-images/jupiter-image'
// images //
import OverviewImage from '../../../assets/planet-jupiter.svg'
import InternalImage from '../../../assets/planet-jupiter-internal.svg'
export default function JupiterTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const toggleActiveTab = (index) => {
        setActiveTab(index);
    }

    return (
        <>
        <StyledTabContainer>
            <JupiterTabLink className={activeTab === 1 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(1)}>OVERVIEW</JupiterTabLink>
            <JupiterTabLink className={activeTab === 2 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(2)}>STRUCTURE</JupiterTabLink>
            <JupiterTabLink className={activeTab === 3 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(3)}>SURFACE</JupiterTabLink>
        </StyledTabContainer>

        <StyledParagraph className={activeTab === 1 ? "active-tab-content" : ""}>
            Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.
        </StyledParagraph>
        
        <StyledParagraph className={activeTab === 2 ? "active-tab-content" : ""}>
            When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.
        </StyledParagraph>

        <StyledParagraph className={activeTab === 3 ? "active-tab-content" : ""}>
            The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.
        </StyledParagraph>
            
        <Image src={OverviewImage} className={activeTab === 1 ? "active-tab-image" : ""} />
        
        <Image src={InternalImage} className={activeTab === 2 ? "active-tab-image" : ""} />
        
        <Image src={OverviewImage} className={activeTab === 3 ? "active-tab-image" : ""} />            
        </>
    )
}
