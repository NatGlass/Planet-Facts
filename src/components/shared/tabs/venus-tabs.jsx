import { useState } from 'react'
import StyledTabContainer from '../../../styles/shared/styled.tab-container'
import MercuryTabLink from '../../../styles/shared/tab-links/styled.venus-tab-links'
import StyledParagraph from '../../../styles/shared/styled.paragraph';
import Image from '../../../styles/shared/tab-images/venus-image'
// images //
import OverviewImage from '../../../assets/planet-venus.svg'
import InternalImage from '../../../assets/planet-venus-internal.svg'


export default function MercuryTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const toggleActiveTab = (index) => {
        setActiveTab(index);
    }

    return (
        <>
        <StyledTabContainer>
            <MercuryTabLink className={activeTab === 1 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(1)}>OVERVIEW</MercuryTabLink>
            <MercuryTabLink className={activeTab === 2 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(2)}>STRUCTURE</MercuryTabLink>
            <MercuryTabLink className={activeTab === 3 ? "active-tab-link" : ""} onClick={()=> toggleActiveTab(3)}>SURFACE</MercuryTabLink>
        </StyledTabContainer>

            
        <StyledParagraph className={activeTab === 1 ? "active-tab-content" : ""}>
            Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.
        </StyledParagraph>
        
        <StyledParagraph className={activeTab === 2 ? "active-tab-content" : ""}>
            The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.
        </StyledParagraph>

        <StyledParagraph className={activeTab === 3 ? "active-tab-content" : ""}>
            Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.
        </StyledParagraph>
            
        <Image src={OverviewImage} className={activeTab === 1 ? "active-tab-image" : ""} />
        
        <Image src={InternalImage} className={activeTab === 2 ? "active-tab-image" : ""} />
        
        <Image src={OverviewImage} className={activeTab === 3 ? "active-tab-image" : ""} />
        </>
    )
}
