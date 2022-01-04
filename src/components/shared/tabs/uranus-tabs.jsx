import { useState } from 'react'
import StyledTabContainer from '../../../styles/shared/styled.tab-container'
import UranusTabLink from '../../../styles/shared/tab-links/styled.uranus-tab-links'
import StyledParagraph from '../../../styles/shared/styled.paragraph';
import Image from '../../../styles/shared/tab-images/uranus-image'
// images //
import OverviewImage from '../../../assets/planet-uranus.svg'
import InternalImage from '../../../assets/planet-uranus-internal.svg'
export default function UranusTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const toggleActiveTab = (index) => {
        setActiveTab(index);
    }

    return (
        <>
        <StyledTabContainer>
            <UranusTabLink className={activeTab === 1 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(1)}>OVERVIEW</UranusTabLink>
            <UranusTabLink className={activeTab === 2 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(2)}>STRUCTURE</UranusTabLink>
            <UranusTabLink className={activeTab === 3 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(3)}>SURFACE</UranusTabLink>
        </StyledTabContainer>

        <StyledParagraph className={activeTab === 1 ? "active-tab-content" : ""}>
            Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.
        </StyledParagraph>
        
        <StyledParagraph className={activeTab === 2 ? "active-tab-content" : ""}>
            The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.
        </StyledParagraph>

        <StyledParagraph className={activeTab === 3 ? "active-tab-content" : ""}>
            The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.
        </StyledParagraph>
            
        <Image src={OverviewImage} className={activeTab === 1 ? "active-tab-image" : ""} />
        
        <Image src={InternalImage} className={activeTab === 2 ? "active-tab-image" : ""} />
        
        <Image src={OverviewImage} className={activeTab === 3 ? "active-tab-image" : ""} />            
        </>
    )
}
